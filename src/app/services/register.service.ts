import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { }

  register(email: string, password: string): void {
    const formData = new FormData();
    formData.append('_username', email);
    formData.append('_password', password);
    this.http.post('http://localhost:8000/register', formData, {responseType: 'text'}).subscribe();
  }
}
