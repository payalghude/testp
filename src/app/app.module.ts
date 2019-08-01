import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AngularMaterialModule } from "./material-module";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { UserService } from "./services";
import { TokenInterceptor } from './services/helpers/http.interceptors';
import { ErrorInterceptor } from './services/helpers/error.interceptors';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    UserRegistrationComponent,
    NotauthorizedComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CookieService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
