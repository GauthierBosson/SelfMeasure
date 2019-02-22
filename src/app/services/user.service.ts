import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';
import { UserResponse } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private helper: JwtHelperService) { }

  /*async getUser() {
    const rawToken = await this.helper.tokenGetter();
    const token = jwt_decode(rawToken);
    const header = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${rawToken}`
    });
    this.http.get<UserResponse>(`http://localhost:8000/api/users/${token.id}`, {headers: header} ).subscribe(
      data => {
        console.log(data);
        this.user = data;
      }
    );
  }*/
}
