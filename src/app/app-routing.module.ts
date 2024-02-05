import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './components/pagesComponents/main/main.component';
import {MySpaceComponent} from './components/pagesComponents/my-space/my-space.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'mySpace', component: MySpaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
