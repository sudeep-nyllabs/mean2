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
var message_component_1 = require("./message.component");
var message_service_1 = require("./message.service");
var MessageListComponent = (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
            _this._messageService.messages = messages;
        });
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n\n            <my-message [message]=\"message\" *ngFor=\"let message of messages\"></my-message>\n\n        </section>\n    ",
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUVyRCxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQWFqRDtJQWNJLDhCQUFxQixlQUE4QjtRQUE5QixvQkFBZSxHQUFmLGVBQWUsQ0FBZTtJQUFHLENBQUM7SUFWdkQsdUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUc7YUFDOUIsU0FBUyxDQUNOLFVBQUEsUUFBUTtZQUNKLEtBQUksQ0FBQyxRQUFRLEdBQW1CLFFBQVEsQ0FBQztZQUN6QyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDN0MsQ0FBQyxDQUNKLENBQUE7SUFDVCxDQUFDO0lBdkJMO1FBQUMsZ0JBQVMsQ0FBRTtZQUNSLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLHNMQU1UO1lBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FDakMsQ0FBQzs7NEJBQUE7SUFnQkYsMkJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDRCQUFvQix1QkFlaEMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4uL2VudGl0aWVzL21lc3NhZ2VcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG5cbiAgICAgICAgICAgIDxteS1tZXNzYWdlIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPjwvbXktbWVzc2FnZT5cblxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbWVzc2FnZXM6TWVzc2FnZVtdO1xuXG4gICAgbmdPbkluaXQgKCk6YW55IHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMgKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUgKFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyAgICAgICAgICAgICAgICAgPSBtZXNzYWdlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOk1lc3NhZ2VTZXJ2aWNlKSB7fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
