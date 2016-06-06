import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../entities/user";
import "rxjs/Rx";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AuthService {

    constructor (private _httpService: Http) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});

        return this._httpService.post('http://localhost:3000/user', body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}