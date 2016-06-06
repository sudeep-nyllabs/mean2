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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Rx_1 = require("rxjs/Rx");
var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
        this.messages = [];
        this.messageIsEdit = new core_1.EventEmitter();
    }
    MessageService.prototype.addMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/message', body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            var message = new message_1.Message(data.content, data._id, 'Dummy', null);
            return message;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this._http.delete('http://localhost:3000/message/' + message.messageId)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.editMessage = function (message) {
        this.messageIsEdit.emit(message);
    };
    MessageService.prototype.updateMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.patch('http://localhost:3000/message/' + message.messageId, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.getMessages = function () {
        return this._http.get('http://localhost:3000/message')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var message = new message_1.Message(data[i].content, data[i]._id, 'Dummy', null);
                objs.push(message);
            }
            return objs;
        })
            .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHdCQUFzQixxQkFBcUIsQ0FBQyxDQUFBO0FBQzVDLHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUduQztJQUtJLHdCQUFxQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUgvQixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7SUFFVixDQUFDO0lBRW5DLG1DQUFVLEdBQVYsVUFBWSxPQUFlO1FBRXZCLElBQU0sSUFBSSxHQUFNLElBQUksQ0FBQyxTQUFTLENBQUUsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUUsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBRW5FLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSwrQkFBK0IsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDN0UsR0FBRyxDQUFFLFVBQUEsUUFBUTtZQUNWLElBQU0sSUFBSSxHQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUcsQ0FBQyxHQUFHLENBQUM7WUFDbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEUsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUcsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBZSxPQUFlO1FBRTFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBRyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDL0IsS0FBSyxDQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUMsSUFBSSxFQUFHLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQWEsT0FBZTtRQUV4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE9BQWdCO1FBRTFCLElBQU0sSUFBSSxHQUFNLElBQUksQ0FBQyxTQUFTLENBQUUsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUUsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBRW5FLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUNsRyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUcsT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQy9CLEtBQUssQ0FBRSxVQUFBLEtBQUssSUFBSSxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFDLElBQUksRUFBRyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSwrQkFBK0IsQ0FBQzthQUNsRCxHQUFHLENBQUUsVUFBQSxRQUFRO1lBQ1YsSUFBTSxJQUFJLEdBQU8sUUFBUSxDQUFDLElBQUksRUFBRyxDQUFDLEdBQUcsQ0FBQztZQUN0QyxJQUFJLElBQUksR0FBUyxFQUFFLENBQUM7WUFFcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25DLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBRSxVQUFBLEtBQUssSUFBSSxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUUsS0FBSyxDQUFDLElBQUksRUFBRyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBNURMO1FBQUMsaUJBQVUsRUFBRzs7c0JBQUE7SUE2RGQscUJBQUM7QUFBRCxDQTVEQSxBQTREQyxJQUFBO0FBNURZLHNCQUFjLGlCQTREMUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4uL2VudGl0aWVzL21lc3NhZ2VcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCBcInJ4anMvUnhcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcblxuQEluamVjdGFibGUgKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG5cbiAgICBtZXNzYWdlczpNZXNzYWdlW10gPSBbXTtcbiAgICBtZXNzYWdlSXNFZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxNZXNzYWdlPigpO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6SHR0cCkge31cblxuICAgIGFkZE1lc3NhZ2UgKG1lc3NhZ2U6TWVzc2FnZSkge1xuXG4gICAgICAgIGNvbnN0IGJvZHkgICAgPSBKU09OLnN0cmluZ2lmeSAobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyAoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0ICgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwIChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSAgPSByZXNwb25zZS5qc29uICgpLm9iajtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlIChkYXRhLmNvbnRlbnQsIGRhdGEuX2lkLCAnRHVtbXknLCBudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2ggKGVycm9yID0+IE9ic2VydmFibGUudGhyb3cgKGVycm9yLmpzb24gKCkpKTtcbiAgICB9XG5cbiAgICBkZWxldGVNZXNzYWdlIChtZXNzYWdlOk1lc3NhZ2UpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlICh0aGlzLm1lc3NhZ2VzLmluZGV4T2YgKG1lc3NhZ2UpLCAxKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlLycgKyBtZXNzYWdlLm1lc3NhZ2VJZClcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT5yZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2ggKGVycm9yID0+IE9ic2VydmFibGUudGhyb3cgKGVycm9yLmpzb24gKCkpKTtcbiAgICB9XG5cbiAgICBlZGl0TWVzc2FnZSAobWVzc2FnZTpNZXNzYWdlKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1lc3NhZ2VJc0VkaXQuZW1pdChtZXNzYWdlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcblxuICAgICAgICBjb25zdCBib2R5ICAgID0gSlNPTi5zdHJpbmdpZnkgKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMgKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlLycgKyBtZXNzYWdlLm1lc3NhZ2VJZCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PnJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaCAoZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyAoZXJyb3IuanNvbiAoKSkpO1xuICAgIH1cblxuICAgIGdldE1lc3NhZ2VzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0ICgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnKVxuICAgICAgICAgICAgLm1hcCAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgICAgID0gcmVzcG9uc2UuanNvbiAoKS5vYmo7XG4gICAgICAgICAgICAgICAgbGV0IG9ianM6YW55W10gPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlIChkYXRhW2ldLmNvbnRlbnQsIGRhdGFbaV0uX2lkLCAnRHVtbXknLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoIChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqcztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2ggKGVycm9yID0+IE9ic2VydmFibGUudGhyb3cgKGVycm9yLmpzb24gKCkpKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
