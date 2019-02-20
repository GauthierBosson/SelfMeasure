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
  height: number;
  weight: number;

  constructor(private router: Router, private regService: RegisterService) { }

  go() {
    this.router.navigateByUrl('/home');
  }

  addPersonalInfos(gender: string, birthdate: string, height: number) {
    const intHeight = parseInt(height);
    this.regService.addPersonalInfos(gender, birthdate, intHeight);
  }

  userIMC() {

  }

  ngOnInit() {
  }

}
