import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  realname: string;
  email: string;
  password: string;

  constructor(private router: Router, private regService: RegisterService, private authService: AuthenticationService) { }

  async register(realname: string, email: string, password: string) {
    await this.regService.register(realname, email, password);
    await this.authService.login(email, password);
    this.router.navigateByUrl('/reg-perso-infos');
  }

  ngOnInit() {
  }

}
