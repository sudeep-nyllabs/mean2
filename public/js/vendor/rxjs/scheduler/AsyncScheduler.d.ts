import {Action} from './Action';
import {Subscription} from '../Subscription';
import {QueueScheduler} from './QueueScheduler';
export declare class AsyncScheduler extends QueueScheduler {
    scheduleNow<T> (work:(x?:T) => Subscription, state?:T):Action<T>;
}
