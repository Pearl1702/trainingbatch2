import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from "./models/Login";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class AuthService {
  postsUrl: string = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Login[]> {
    return this.http.get<Login[]>(this.postsUrl);
  }

  savePost(login: Login): Observable<Login> {
    return this.http.post<Login>(this.postsUrl, login, httpOptions);
  }
}