import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";

@Component ({
    moduleId: module.id,
    selector: 'my-signin',
    templateUrl: 'signin.template.html'
})
export class SigninComponent implements OnInit {

    myForm:ControlGroup;

    ngOnInit ():any {

        this.myForm = this._formBuilder.group ({

            password: ['', Validators.required],

            email: ['', Validators.compose ([
                Validators.required,
                this.isValidEmail
            ])]

        });
    }

    constructor (private _formBuilder:FormBuilder) {}

    private isValidEmail (control:Control):{[s:string]:boolean} {

        if (!control.value.match (/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)) {
            return {invalidEmail: true}
        }
    }

}