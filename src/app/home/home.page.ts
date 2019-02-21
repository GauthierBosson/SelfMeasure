import {Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponse } from '../interfaces/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';
import getAge from 'get-age';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user: UserResponse = {username: '', realname: '', birthdate: '', height: null, gender: '', imc: null, weights: []};
  kcalNeeded: number;

  constructor(private router: Router, private http: HttpClient, private helper: JwtHelperService) {}

  goToAlimentPage() {
    this.router.navigateByUrl('/add-aliment');
  }

  async getUser() {
    const rawToken = await this.helper.tokenGetter();
    const token = jwt_decode(rawToken);
    const header = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${rawToken}`
    });
    this.http.get(`http://localhost:8000/api/users/${token.id}`, {headers: header}).subscribe(
      data => {
        this.user = data as any;
        console.log(this.user);
        this.getKcal();
      }
    );
  }

  getKcal() {
    console.log(this.user.birthdate);
    const age = getAge(this.user.birthdate);
    console.log(age);
    // [13,7516 x Poids (kg)] + [500,33 x Taille (m)] – (6,7550 x Age) + 66,473
    const kcal = Math.round(((13.7516 * this.user.weights[0].value) + (500.33 * (this.user.height / 100) - (6.7550 * age) + 66.473)) * 1.56);
    console.log(kcal);
    this.kcalNeeded = kcal;
  }

  ngOnInit() {
    this.getUser();
  }
}
