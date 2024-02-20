//Navbar
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
//Cards
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    //Navbar
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    //Cards
    MatCardModule
  ],
  exports: [
    //Navbar
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    //Cards
    MatCardModule
  ],
})
export class AngularMaterialModule {}
