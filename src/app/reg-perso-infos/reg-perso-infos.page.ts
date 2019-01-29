import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-perso-infos',
  templateUrl: './reg-perso-infos.page.html',
  styleUrls: ['./reg-perso-infos.page.scss'],
})
export class RegPersoInfosPage implements OnInit {

  constructor(private router: Router) { }

  go() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
