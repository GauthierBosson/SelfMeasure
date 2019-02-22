import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  weight: any;

  constructor(private helper: JwtHelperService, private http: HttpClient) { }

  async addWeight(weight: any) {
    const rawToken = await this.helper.tokenGetter();
    const header = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${rawToken}`
    });
    const date = new Date();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    const newDate = year + '-' + month + '-' + day;
    const dataw = JSON.stringify({value: weight, date: newDate});
    this.http.post('http://localhost:8000/api/weights', dataw, {headers: header}).subscribe();
  }

  ngOnInit() {
  }

}
