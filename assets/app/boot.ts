///<reference path="../../typings.d.ts"/>
import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import {MessageService} from "./messages/message.service";
import {ROUTER_PROVIDERS} from "@angular/router";
import {provide} from "@angular/core";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {HTTP_PROVIDERS} from "@angular/http";
import {AuthService} from "./auth/auth.service";

bootstrap (AppComponent, [MessageService,AuthService, HTTP_PROVIDERS, ROUTER_PROVIDERS, provide (LocationStrategy, {useClass: HashLocationStrategy})]);