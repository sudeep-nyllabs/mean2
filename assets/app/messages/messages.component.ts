import {Component} from "@angular/core";
import {MessageListComponent} from "./message-list.component";
import {MessageInputComponent} from "./input/message-input.component";

@Component ({
    selector: 'my-messages',
    template: `
        <div class="row spacing">

            <my-message-input></my-message-input>
        
        </div>
        <div class="row">
        
            <my-message-list></my-message-list>
        
        </div>

    `,
    directives: [MessageListComponent, MessageInputComponent]
})
export class MessagesComponent {

}
