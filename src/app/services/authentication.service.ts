import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  login(email: string, password: string) {
    return this.httpClient.post<{token: string}>('http://127.0.0.1:8000/login_check', {'username': email, 'password': password})
      .pipe(tap(res => {
      this.storage.set('access_token', res.token);
    })).subscribe();
  }

  register(email: string, password: string) {
    return this.httpClient.post<{access_token: string}>('http://localhost:8000/register', {email, password}).pipe(tap(res => {
      this.login(email, password);
    }));
  }

  logout() {
    this.storage.remove('access_token');
  }

  public get loggedIn(): boolean {
    return this.storage.get('access_token') !==  null;
  }


}
