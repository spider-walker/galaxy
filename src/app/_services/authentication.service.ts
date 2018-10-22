import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import *  as AppConfig from '../config';

@Injectable()
export class AuthenticationService {
     private config: any;
    constructor(private http: HttpClient) { 
        this.config = AppConfig.config;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.config.apiUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}