import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class UserService { 
  UserData: any;

  constructor (private http: HttpClient) { }

getUserData() {
  this.UserData = this.http.get('https://reqres.in/api/users/2');

  const userData = new Subject();

  setTimeout (() => {
    userData.next(this.UserData);
    userData.complete();
  }, 100);
  return this.UserData;
  }
}

