import {Component} from "@angular/core";

@Component ({
    selector: 'my-logout',
    template: `
        <section class="col-md-8 col-md-offset-2">
        
            <button disabled class="btn btn-danger" (click)="onLogout()">Logout</button>
            
        </section>
    `
})
export class LogoutComponent {

}
