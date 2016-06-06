import {Component, OnInit} from "@angular/core";
import {Message} from "../../entities/message";
import {MessageService} from "../message.service";

@Component ({
    moduleId: module.id,
    selector: 'my-message-input',
    templateUrl: 'message-input.template.html',
})
export class MessageInputComponent implements OnInit{

    message: Message = null;

    ngOnInit ():any {
        this._messageService.messageIsEdit
            .subscribe(

            message => {
                this.message = message;
            }
        )
    }

    constructor (private _messageService:MessageService) {}

    onSubmit (form:any) {

        if (this.message) {

            this.message.content = form.content;

            this._messageService.updateMessage(this.message)
                .subscribe(

                    data => console.log(data),

                    error => console.error(error)
                );

            this.message = null;
        }

        else {

            const message:Message = new Message (form.content, null, 'Dummy');

            this._messageService.addMessage (message)
                .subscribe (
                    
                    data => {

                        console.log (data);

                        this._messageService.messages.push (data);
                    },
                    error => console.log (error)
                );
        }
    }

    onCancel () { this.message = null; }
}