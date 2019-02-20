import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-reg-perso-infos',
  templateUrl: './reg-perso-infos.page.html',
  styleUrls: ['./reg-perso-infos.page.scss'],
})
export class RegPersoInfosPage implements OnInit {

  gender: string;
  birthdate: string;
  height: string;
  weight: string;

  constructor(private router: Router, private regService: RegisterService) { }

  go() {
    this.router.navigateByUrl('/home');
  }

  addPersonalInfos(gender: string, birthdate: string, height: string, weight: string) {
    const intHeight = parseInt(height, 10);
    const intWeight = parseInt(weight, 10);
    this.regService.addPersonalInfos(gender, birthdate, intHeight, intWeight);
  }

  ngOnInit() {
  }

}
