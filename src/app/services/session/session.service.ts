import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) { }

  login(token) {
    this.cookieService.set(environment.cookies.auth.name, token, environment.cookies.auth.expiration, '/');
  }

  getToken() {
    const cookieExists = this.cookieService.check(environment.cookies.auth.name);
    if (cookieExists) {
      return this.cookieService.get(environment.cookies.auth.name);
    }

    return null;
  }

  logout() {
    this.cookieService.delete(environment.cookies.auth.name);
    this.goToLogin();
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
