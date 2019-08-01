import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { UserService } from "../services";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router, private service: UserService, private _cookieService: CookieService) { }

  ngOnInit() {
    console.log(environment.url);
  }
  getCookie(key: string) {
    return this._cookieService.get(key);
  }

  validateUser() {
    console.log("method call");
    debugger;

    //this.router.navigate(['/dashboard']);
    if (this.username != null && this.password != null) {
      this.service.login({ email: this.username, password: this.password }).subscribe((data: any) => {
        sessionStorage.setItem("token", data.token)
        //this._cookieService.put('_verificationToken', data.token);
        // console.log("Set Test Cookie as Test");
        // this.router.navigate(['/dashboard']);
      })
    }
  }

}
