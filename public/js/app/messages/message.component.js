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
var message_1 = require("../entities/message");
var message_service_1 = require("./message.service");
var MessageComponent = (function () {
    function MessageComponent(_messagesService) {
        this._messagesService = _messagesService;
    }
    MessageComponent.prototype.onEdit = function () {
        this._messagesService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this._messagesService.deleteMessage(this.message)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message',
            templateUrl: 'message.template.html',
            styleUrls: ['message.style.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0Msd0JBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFDNUMsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFRakQ7SUFJSSwwQkFBcUIsZ0JBQStCO1FBQS9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBZTtJQUFHLENBQUM7SUFFeEQsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzdDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQztJQUNWLENBQUM7SUFmRDtRQUFDLFlBQUssRUFBRzs7cURBQUE7SUFSYjtRQUFDLGdCQUFTLENBQUU7WUFDUixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNuQyxDQUFDOzt3QkFBQTtJQW1CRix1QkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksd0JBQWdCLG1CQWtCNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4uL2VudGl0aWVzL21lc3NhZ2VcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnbWVzc2FnZS50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbWVzc2FnZS5zdHlsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCAoKSBtZXNzYWdlOk1lc3NhZ2U7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfbWVzc2FnZXNTZXJ2aWNlOk1lc3NhZ2VTZXJ2aWNlKSB7fVxuXG4gICAgb25FZGl0ICgpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZXNTZXJ2aWNlLmVkaXRNZXNzYWdlICh0aGlzLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIG9uRGVsZXRlICgpIHtcblxuICAgICAgICB0aGlzLl9tZXNzYWdlc1NlcnZpY2UuZGVsZXRlTWVzc2FnZSAodGhpcy5tZXNzYWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
