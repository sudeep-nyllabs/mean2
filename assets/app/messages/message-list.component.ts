import {Component, OnInit} from "@angular/core";
import {MessageComponent} from "./message.component";
import {Message} from "../entities/message";
import {MessageService} from "./message.service";

@Component ({
    selector: 'my-message-list',
    template: `
        <section class="col-md-8 col-md-offset-2">

            <my-message [message]="message" *ngFor="let message of messages"></my-message>

        </section>
    `,
    directives: [MessageComponent]
})
export class MessageListComponent implements OnInit {

    messages:Message[];

    ngOnInit ():any {
        this._messageService.getMessages ()
            .subscribe (
                messages => {
                    this.messages                 = messages;
                    this._messageService.messages = messages;
                }
            )
    }

    constructor (private _messageService:MessageService) {}
}