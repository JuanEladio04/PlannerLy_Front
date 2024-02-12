import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './components/pagesComponents/main/main.component';
import {MySpaceComponent} from './components/pagesComponents/my-space/my-space.component';
import { UserFormularyComponent } from './components/smallComponents/user-formulary/user-formulary.component';
import { LoginComponent } from './components/pagesComponents/login/login.component';
import { CreateUserComponent } from './components/pagesComponents/create-user/create-user.component';
import { AuthGuard } from './guard/auth.guard';
import { registerLoginGuard } from './guard/register-login-guard.guard';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'mySpace', component: MySpaceComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [registerLoginGuard] },
  { path: 'register', component: CreateUserComponent,  canActivate: [registerLoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
