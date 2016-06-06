import {Component} from "@angular/core";
import {SignupComponent} from "./signup/signup.component";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {SigninComponent} from "./signin/signin.component";
import {LogoutComponent} from "./logout.component";

@Component ({
    moduleId: module.id,
    selector: 'my-auth',
    templateUrl: 'auth.template.html',
    styles: [`
        .router-link-active {
            color: #555;
            cursor: default;
            background-color: #fff;
            border: 1px solid #ddd;
            border-bottom-color: transparent;
        }
    `],
    directives: [ROUTER_DIRECTIVES]
})
@Routes ([
    {path: '/signup', component: SignupComponent},
    {path: '/signin', component: SigninComponent},
    {path: '/logout', component: LogoutComponent}
])
export class AuthenticationComponent {

}
