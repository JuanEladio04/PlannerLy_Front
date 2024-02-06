import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './components/pagesComponents/main/main.component';
import {MySpaceComponent} from './components/pagesComponents/my-space/my-space.component';
import { UserFormularyComponent } from './components/smallComponents/user-formulary/user-formulary.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'mySpace', component: MySpaceComponent },
  { path: 'login', component: UserFormularyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
