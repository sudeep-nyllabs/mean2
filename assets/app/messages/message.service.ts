import {Injectable, EventEmitter} from "@angular/core";
import {Message} from "../entities/message";
import {Http, Headers} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Rx";

@Injectable ()
export class MessageService {

    messages:Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor (private _http:Http) {}

    addMessage (message:Message) {

        const body    = JSON.stringify (message);
        const headers = new Headers ({'Content-Type': 'application/json'});

        return this._http.post ('http://localhost:3000/message', body, {headers: headers})
            .map (response => {
                const data  = response.json ().obj;
                let message = new Message (data.content, data._id, 'Dummy', null);
                return message;
            })
            .catch (error => Observable.throw (error.json ()));
    }

    deleteMessage (message:Message) {
        
        this.messages.splice (this.messages.indexOf (message), 1);

        return this._http.delete('http://localhost:3000/message/' + message.messageId)
            .map(response =>response.json())
            .catch (error => Observable.throw (error.json ()));
    }

    editMessage (message:Message) {
        
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {

        const body    = JSON.stringify (message);
        const headers = new Headers ({'Content-Type': 'application/json'});

        return this._http.patch('http://localhost:3000/message/' + message.messageId, body, {headers: headers})
            .map(response =>response.json())
            .catch (error => Observable.throw (error.json ()));
    }

    getMessages () {
        return this._http.get ('http://localhost:3000/message')
            .map (response => {
                const data     = response.json ().obj;
                let objs:any[] = [];

                for (let i = 0; i < data.length; i++) {
                    let message = new Message (data[i].content, data[i]._id, 'Dummy', null);
                    objs.push (message);
                }

                return objs;
            })
            .catch (error => Observable.throw (error.json ()));
    }
}