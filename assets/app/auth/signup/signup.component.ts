import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";
import {User} from "../../entities/user";
import {AuthService} from "../auth.service";
@Component ({
    moduleId: module.id,
    selector: 'my-signup',
    templateUrl: 'signup.template.html'
})
export class SignupComponent implements OnInit {

    myForm:ControlGroup;

    ngOnInit ():any {

        this.myForm = this._formBuilder.group ({

            firstName: ['', Validators.required],

            lastName: ['', Validators.required],

            password: ['', Validators.required],

            email: ['', Validators.compose ([
                Validators.required,
                this.isValidEmail
            ])]

        });
    }

    constructor (private _formBuilder:FormBuilder, private _authService:AuthService) {}

    private isValidEmail (control:Control):{[s:string]:boolean} {

        if (!control.value.match (/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)) {
            return {invalidEmail: true}
        }
    }

    onSubmit () {

        const user = new User (this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);

        this._authService.signup (user)
            .subscribe (
                data => console.log (data),
                error => console.error (error)
            )
    }


}
