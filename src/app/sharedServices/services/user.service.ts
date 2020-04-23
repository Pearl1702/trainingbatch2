import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs';

@Injectable()
export class UserService {
  USER_DETAILS: any;

  constructor (private http: HttpClient) {
    //
  }

  getUserData () {
    this.USER_DETAILS = this.http.get ('https://reqres.in/api/users/2');
    const userInfo = new Subject ();

    setTimeout (() => {
      userInfo.next (this.USER_DETAILS);
      userInfo.complete ();
    });

    return this.USER_DETAILS;
  }
}