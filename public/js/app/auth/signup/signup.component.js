"use strict";
var __decorate          = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor (target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate (decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d (r) : c > 3 ? d (target, key, r) : d (target, key)) || r;
        return c > 3 && r && Object.defineProperty (target, key, r), r;
    };
var __metadata          = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata (k, v);
    };
var core_1              = require ("@angular/core");
var common_1            = require ("@angular/common");
var user_1              = require ("../../entities/user");
var auth_service_1      = require ("../auth.service");
var SignupComponent     = (function () {
    function SignupComponent (_formBuilder, _authService) {
        this._formBuilder = _formBuilder;
        this._authService = _authService;
    }

    SignupComponent.prototype.ngOnInit     = function () {
        this.myForm = this._formBuilder.group ({
            firstName: ['', common_1.Validators.required],
            lastName: ['', common_1.Validators.required],
            password: ['', common_1.Validators.required],
            email: ['', common_1.Validators.compose ([
                common_1.Validators.required,
                this.isValidEmail
            ])]
        });
    };
    SignupComponent.prototype.isValidEmail = function (control) {
        if (!control.value.match (/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)) {
            return {invalidEmail: true};
        }
    };
    SignupComponent.prototype.onSubmit     = function () {
        var user = new user_1.User (this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this._authService.signup (user)
            .subscribe (function (data) { return console.log (data); }, function (error) { return console.error (error); });
    };
    SignupComponent                        = __decorate ([
        core_1.Component ({
            moduleId: module.id,
            selector: 'my-signup',
            templateUrl: 'signup.template.html'
        }),
        __metadata ('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
} ());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBNkQsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRSxxQkFBbUIscUJBQXFCLENBQUMsQ0FBQTtBQUN6Qyw2QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQU01QztJQXNCSSx5QkFBcUIsWUFBd0IsRUFBVSxZQUF5QjtRQUEzRCxpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUcsQ0FBQztJQWxCcEYsa0NBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUU7WUFFbkMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBRXBDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUVuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFFbkMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFFO29CQUM1QixtQkFBVSxDQUFDLFFBQVE7b0JBQ25CLElBQUksQ0FBQyxZQUFZO2lCQUNwQixDQUFDLENBQUM7U0FFTixDQUFDLENBQUM7SUFDUCxDQUFDO0lBSU8sc0NBQVksR0FBcEIsVUFBc0IsT0FBZTtRQUVqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFFLDBFQUEwRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BHLE1BQU0sQ0FBQyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQTtRQUMvQixDQUFDO0lBQ0wsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFFSSxJQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDekIsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUNoQyxDQUFBO0lBQ1QsQ0FBQztJQTdDTDtRQUFDLGdCQUFTLENBQUU7WUFDUixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDOzt1QkFBQTtJQTRDRixzQkFBQztBQUFELENBM0NBLEFBMkNDLElBQUE7QUEzQ1ksdUJBQWUsa0JBMkMzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi8uLi9lbnRpdGllcy91c2VyXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vYXV0aC5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50ICh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LXNpZ251cCcsXG4gICAgdGVtcGxhdGVVcmw6ICdzaWdudXAudGVtcGxhdGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG15Rm9ybTpDb250cm9sR3JvdXA7XG5cbiAgICBuZ09uSW5pdCAoKTphbnkge1xuXG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAgKHtcblxuICAgICAgICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuXG4gICAgICAgICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcblxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG5cbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZSAoW1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkRW1haWxcbiAgICAgICAgICAgIF0pXVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9mb3JtQnVpbGRlcjpGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gICAgcHJpdmF0ZSBpc1ZhbGlkRW1haWwgKGNvbnRyb2w6Q29udHJvbCk6e1tzOnN0cmluZ106Ym9vbGVhbn0ge1xuXG4gICAgICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaCAoL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRFbWFpbDogdHJ1ZX1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU3VibWl0KCkge1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih0aGlzLm15Rm9ybS52YWx1ZS5lbWFpbCwgdGhpcy5teUZvcm0udmFsdWUucGFzc3dvcmQsIHRoaXMubXlGb3JtLnZhbHVlLmZpcnN0TmFtZSwgdGhpcy5teUZvcm0udmFsdWUubGFzdE5hbWUpO1xuXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ251cCh1c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
