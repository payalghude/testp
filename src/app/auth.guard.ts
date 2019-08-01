import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'angular2-cookie/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  username:string;
  constructor(private _cookieService:CookieService, private _router:Router) {
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.username =  this._cookieService.get("_verificationToken");
    if (this.username)
    {
     return true;
    }
    else
    {
     this._router.navigate(['/']);
     return false;
    }
  }
}
