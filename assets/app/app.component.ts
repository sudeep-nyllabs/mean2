import {Component} from "@angular/core";
import {MessagesComponent} from "./messages/messages.component";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./header.component";

@Component ({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
        
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@Routes ([
    {path: '/', component: MessagesComponent},
    {path: '/auth', component: AuthenticationComponent}
])
export class AppComponent {

}