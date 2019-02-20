import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router, private helper: JwtHelperService) { }

  register(realname: string, email: string, password: string): void {
    const formData = new FormData();
    formData.append('_username', email);
    formData.append('_password', password);
    formData.append('_realname', realname);
    this.http.post('http://localhost:8000/register', formData, {responseType: 'text'}).subscribe();
  }

  async addPersonalInfos(gender: string, birthdate: any, height: number) {
    const rawToken = await this.helper.tokenGetter();
    const token = jwt_decode(rawToken);
    console.log(gender);
    console.log(birthdate);
    const header = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${rawToken}`
    });
    const data = JSON.stringify({birthdate: birthdate, height: height, gender: gender, imc: 26});
    this.http.put(`http://localhost:8000/api/users/${token.id}`, data, {headers: header}).subscribe();
  }

}
