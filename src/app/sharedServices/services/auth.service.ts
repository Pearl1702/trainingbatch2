import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginModel } from "./models/login.model";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class AuthService {
  postsUrl: string = 'https://reqres.in/api/login';

  constructor (private http: HttpClient) {
    //
  }

  savePost (login: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel> (this.postsUrl, login, httpOptions);
  }
}