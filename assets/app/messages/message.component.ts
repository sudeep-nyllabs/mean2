import {Component, Input} from "@angular/core";
import {Message} from "../entities/message";
import {MessageService} from "./message.service";

@Component ({
    moduleId: module.id,
    selector: 'my-message',
    templateUrl: 'message.template.html',
    styleUrls: ['message.style.css']
})
export class MessageComponent {

    @Input () message:Message;

    constructor (private _messagesService:MessageService) {}

    onEdit () {
        this._messagesService.editMessage (this.message);
    }

    onDelete () {

        this._messagesService.deleteMessage (this.message)
            .subscribe (
                data => console.log (data),
                error => console.error (error)
            );
    }
}
