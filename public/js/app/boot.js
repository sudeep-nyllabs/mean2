"use strict";
///<reference path="../../typings.d.ts"/>
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_component_1 = require("./app.component");
var message_service_1 = require("./messages/message.service");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var auth_service_1 = require("./auth/auth.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [message_service_1.MessageService, auth_service_1.AuthService, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5QztBQUN6Qyx5Q0FBd0IsbUNBQW1DLENBQUMsQ0FBQTtBQUM1RCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxnQ0FBNkIsNEJBQTRCLENBQUMsQ0FBQTtBQUMxRCx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCxxQkFBc0IsZUFBZSxDQUFDLENBQUE7QUFDdEMsdUJBQXFELGlCQUFpQixDQUFDLENBQUE7QUFDdkUscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLDZCQUEwQixxQkFBcUIsQ0FBQyxDQUFBO0FBRWhELG9DQUFTLENBQUUsNEJBQVksRUFBRSxDQUFDLGdDQUFjLEVBQUMsMEJBQVcsRUFBRSxxQkFBYyxFQUFFLHlCQUFnQixFQUFFLGNBQU8sQ0FBRSx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pY1wiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcblxuYm9vdHN0cmFwIChBcHBDb21wb25lbnQsIFtNZXNzYWdlU2VydmljZSxBdXRoU2VydmljZSwgSFRUUF9QUk9WSURFUlMsIFJPVVRFUl9QUk9WSURFUlMsIHByb3ZpZGUgKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9KV0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
