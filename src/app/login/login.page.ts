import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, private auth: AuthenticationService) {}

    go() {
      this.router.navigateByUrl('/register');
    }

  login(email: string, password: string) {
    this.auth.login(email, password);
  }

  ngOnInit() {
  }

}
