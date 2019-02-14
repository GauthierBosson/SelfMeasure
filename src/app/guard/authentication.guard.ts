import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) { }

  async canActivate(): Promise<boolean> {
    if (await this.authService.checkToken()) {
      console.log('true');
      return true;
    }

    this.router.navigate(['/login']);
    console.log('false');
    return false;
  }
}
