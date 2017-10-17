import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {User} from '../classses/user';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  create(user: User) {
    return this.http.post('/users/register', user);
  }
}
