import { FormatHelper } from './../../shared/core/format.helpers';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  formatHelper = FormatHelper.getInstance();

  constructor(
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userLogged = this.formatHelper.getUserLogged();
    if (userLogged) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
