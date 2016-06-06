"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var SigninComponent = (function () {
    function SigninComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = this._formBuilder.group({
            password: ['', common_1.Validators.required],
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isValidEmail
                ])]
        });
    };
    SigninComponent.prototype.isValidEmail = function (control) {
        if (!control.value.match(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)) {
            return { invalidEmail: true };
        }
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-signin',
            templateUrl: 'signin.template.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBNkQsaUJBQWlCLENBQUMsQ0FBQTtBQU8vRTtJQWtCSSx5QkFBcUIsWUFBd0I7UUFBeEIsaUJBQVksR0FBWixZQUFZLENBQVk7SUFBRyxDQUFDO0lBZGpELGtDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFFO1lBRW5DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUVuQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUU7b0JBQzVCLG1CQUFVLENBQUMsUUFBUTtvQkFDbkIsSUFBSSxDQUFDLFlBQVk7aUJBQ3BCLENBQUMsQ0FBQztTQUVOLENBQUMsQ0FBQztJQUNQLENBQUM7SUFJTyxzQ0FBWSxHQUFwQixVQUFzQixPQUFlO1FBRWpDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUUsMEVBQTBFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEcsTUFBTSxDQUFDLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFBO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBOUJMO1FBQUMsZ0JBQVMsQ0FBRTtZQUNSLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7O3VCQUFBO0lBNEJGLHNCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSx1QkFBZSxrQkEyQjNCLENBQUEiLCJmaWxlIjoiYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuQENvbXBvbmVudCAoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1zaWduaW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnc2lnbmluLnRlbXBsYXRlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBteUZvcm06Q29udHJvbEdyb3VwO1xuXG4gICAgbmdPbkluaXQgKCk6YW55IHtcblxuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwICh7XG5cbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UgKFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZEVtYWlsXG4gICAgICAgICAgICBdKV1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6Rm9ybUJ1aWxkZXIpIHt9XG5cbiAgICBwcml2YXRlIGlzVmFsaWRFbWFpbCAoY29udHJvbDpDb250cm9sKTp7W3M6c3RyaW5nXTpib29sZWFufSB7XG5cbiAgICAgICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoICgvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLykpIHtcbiAgICAgICAgICAgIHJldHVybiB7aW52YWxpZEVtYWlsOiB0cnVlfVxuICAgICAgICB9XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
