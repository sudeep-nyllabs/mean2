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
var message_1 = require("../../entities/message");
var message_service_1 = require("../message.service");
var MessageInputComponent = (function () {
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
        this.message = null;
    }
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.messageIsEdit
            .subscribe(function (message) {
            _this.message = message;
        });
    };
    MessageInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.message) {
            this.message.content = form.content;
            this._messageService.updateMessage(this.message)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
            this.message = null;
        }
        else {
            var message = new message_1.Message(form.content, null, 'Dummy');
            this._messageService.addMessage(message)
                .subscribe(function (data) {
                console.log(data);
                _this._messageService.messages.push(data);
            }, function (error) { return console.log(error); });
        }
    };
    MessageInputComponent.prototype.onCancel = function () { this.message = null; };
    MessageInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message-input',
            templateUrl: 'message-input.template.html',
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL2lucHV0L21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsd0JBQXNCLHdCQUF3QixDQUFDLENBQUE7QUFDL0MsZ0NBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFPbEQ7SUFjSSwrQkFBcUIsZUFBOEI7UUFBOUIsb0JBQWUsR0FBZixlQUFlLENBQWU7UUFabkQsWUFBTyxHQUFZLElBQUksQ0FBQztJQVk4QixDQUFDO0lBVnZELHdDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYTthQUM3QixTQUFTLENBRVYsVUFBQSxPQUFPO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBSUQsd0NBQVEsR0FBUixVQUFVLElBQVE7UUFBbEIsaUJBaUNDO1FBL0JHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRWYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUVwQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUMzQyxTQUFTLENBRU4sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUV6QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7WUFFTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDO1FBRUQsSUFBSSxDQUFDLENBQUM7WUFFRixJQUFNLE9BQU8sR0FBVyxJQUFJLGlCQUFPLENBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUUsT0FBTyxDQUFDO2lCQUNwQyxTQUFTLENBRU4sVUFBQSxJQUFJO2dCQUVBLE9BQU8sQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRW5CLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFuQixDQUFtQixDQUMvQixDQUFDO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBUSxHQUFSLGNBQWMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBeER4QztRQUFDLGdCQUFTLENBQUU7WUFDUixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7OzZCQUFBO0lBcURGLDRCQUFDO0FBQUQsQ0FwREEsQUFvREMsSUFBQTtBQXBEWSw2QkFBcUIsd0JBb0RqQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL2lucHV0L21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4uLy4uL2VudGl0aWVzL21lc3NhZ2VcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuLi9tZXNzYWdlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCAoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWlucHV0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ21lc3NhZ2UtaW5wdXQudGVtcGxhdGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIG1lc3NhZ2U6IE1lc3NhZ2UgPSBudWxsO1xuXG4gICAgbmdPbkluaXQgKCk6YW55IHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UubWVzc2FnZUlzRWRpdFxuICAgICAgICAgICAgLnN1YnNjcmliZShcblxuICAgICAgICAgICAgbWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9tZXNzYWdlU2VydmljZTpNZXNzYWdlU2VydmljZSkge31cblxuICAgIG9uU3VibWl0IChmb3JtOmFueSkge1xuXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBmb3JtLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UodGhpcy5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcblxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZTpNZXNzYWdlID0gbmV3IE1lc3NhZ2UgKGZvcm0uY29udGVudCwgbnVsbCwgJ0R1bW15Jyk7XG5cbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UgKG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSAoXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlcy5wdXNoIChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2cgKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNhbmNlbCAoKSB7IHRoaXMubWVzc2FnZSA9IG51bGw7IH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
