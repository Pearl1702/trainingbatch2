import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService { 
  

 constructor(private http: HttpClient) { }

  getData(): Observable<object> {
  return this.http.get('https://https://reqres.in/api/users/2')
    .map((res:any) => res.object.photo);
}
}

