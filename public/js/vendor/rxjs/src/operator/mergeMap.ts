import {Observable, ObservableInput} from '../Observable';
import {Operator} from '../Operator';
import {Subscriber} from '../Subscriber';
import {Subscription} from '../Subscription';
import {subscribeToResult} from '../util/subscribeToResult';
import {OuterSubscriber} from '../OuterSubscriber';
import {InnerSubscriber} from '../InnerSubscriber';

/**
 * Projects each source value to an Observable which is merged in the output
 * Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link mergeAll}.</span>
 *
 * <img src="./img/mergeMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger.
 *
 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
 * var letters = Rx.Observable.of('a', 'b', 'c');
 * var result = letters.mergeMap(x =>
 *   Rx.Observable.interval(1000).map(i => x+i)
 * );
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): Observable} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and merging the results of the Observables obtained
 * from this transformation.
 * @method mergeMap
 * @owner Observable
 */
export function mergeMap<T, I, R> (project:(value:T, index:number) => ObservableInput<I>,
                                   resultSelector?:((outerValue:T, innerValue:I, outerIndex:number, innerIndex:number) => R) | number,
                                   concurrent:number = Number.POSITIVE_INFINITY):Observable<R> {
    if (typeof resultSelector === 'number') {
        concurrent     = <number>resultSelector;
        resultSelector = null;
    }
    return this.lift (new MergeMapOperator (project, <any>resultSelector, concurrent));
}

export interface MergeMapSignature<T> {
    <R>(project:(value:T, index:number) => ObservableInput<R>, concurrent?:number):Observable<R>;
    <I, R>(project:(value:T, index:number) => ObservableInput<I>,
           resultSelector:(outerValue:T, innerValue:I, outerIndex:number, innerIndex:number) => R,
           concurrent?:number):Observable<R>;
}

export class MergeMapOperator<T, I, R> implements Operator<T, I> {
    constructor (private project:(value:T, index:number) => ObservableInput<I>,
                 private resultSelector?:(outerValue:T, innerValue:I, outerIndex:number, innerIndex:number) => R,
                 private concurrent:number = Number.POSITIVE_INFINITY) {
    }

    call (observer:Subscriber<I>, source:any):any {
        return source._subscribe (new MergeMapSubscriber (
            observer, this.project, this.resultSelector, this.concurrent
        ));
    }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class MergeMapSubscriber<T, I, R> extends OuterSubscriber<T, I> {
    private hasCompleted:boolean     = false;
    private buffer:Observable<any>[] = [];
    private active:number            = 0;
    protected index:number           = 0;

    constructor (destination:Subscriber<I>,
                 private project:(value:T, index:number) => ObservableInput<I>,
                 private resultSelector?:(outerValue:T, innerValue:I, outerIndex:number, innerIndex:number) => R,
                 private concurrent:number = Number.POSITIVE_INFINITY) {
        super (destination);
    }

    protected _next (value:any):void {
        if (this.active < this.concurrent) {
            this._tryNext (value);
        } else {
            this.buffer.push (value);
        }
    }

    protected _tryNext (value:any) {
        let result:any;
        const index = this.index++;
        try {
            result = this.project (value, index);
        } catch (err) {
            this.destination.error (err);
            return;
        }
        this.active++;
        this._innerSub (result, value, index);
    }

    private _innerSub (ish:any, value:T, index:number):void {
        this.add (subscribeToResult<T, I> (this, ish, value, index));
    }

    protected _complete ():void {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete ();
        }
    }

    notifyNext (outerValue:T, innerValue:I,
                outerIndex:number, innerIndex:number,
                innerSub:InnerSubscriber<T, I>):void {
        if (this.resultSelector) {
            this._notifyResultSelector (outerValue, innerValue, outerIndex, innerIndex);
        } else {
            this.destination.next (innerValue);
        }
    }

    _notifyResultSelector (outerValue:T, innerValue:I, outerIndex:number, innerIndex:number) {
        let result:R;
        try {
            result = this.resultSelector (outerValue, innerValue, outerIndex, innerIndex);
        } catch (err) {
            this.destination.error (err);
            return;
        }
        this.destination.next (result);
    }

    notifyComplete (innerSub:Subscription):void {
        const buffer = this.buffer;
        this.remove (innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next (buffer.shift ());
        } else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete ();
        }
    }
}
