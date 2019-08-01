import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  username: string;
  constructor(private _cookieService: CookieService, public router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot

  ): boolean {
    debugger;
    if (sessionStorage.getItem("token")) {
      return true;
    }
    else {
      this.router.navigate(['unauthorized']);
      return false;
    }

  }

}
