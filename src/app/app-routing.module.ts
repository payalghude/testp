import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';



const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'dashboard' ,component:DashboardComponent},
  {path:'admin-dashboard' ,component:AdminDashboardComponent, canActivate:[AuthGuard, AdminGuard]},
  {path:'user-dashboard' ,component:UserDashboardComponent},
  {path:'registration' ,component:UserRegistrationComponent},
  {path:'unauthorized', component: NotauthorizedComponent},
  {path: '**', component: PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
