import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, private regService: RegisterService) { }

  go() {
    this.router.navigateByUrl('/reg-perso-infos');
  }

  register(email: string, password: string) {
    this.regService.register(email, password);
  }

  ngOnInit() {
  }

}
