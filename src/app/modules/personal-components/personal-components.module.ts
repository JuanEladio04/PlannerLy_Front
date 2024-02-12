import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { ListUsersComponent } from '../../components/pagesComponents/list-users/list-users.component';
import { CreateUserComponent } from '../../components/pagesComponents/create-user/create-user.component';
import { MainComponent } from '../../components/pagesComponents/main/main.component';
import { FooterComponent } from '../../components/smallComponents/footer/footer.component';
import { NavbarComponent } from '../../components/smallComponents/navbar/navbar.component';
import { HeadComponent } from '../../components/layouts/head/head.component';
import { AppContentContainerComponent } from '../../components/layouts/app-content-container/app-content-container.component';
import { IndexCardComponent } from '../../components/smallComponents/index-card/index-card.component';
import { MySpaceComponent } from '../../components/pagesComponents/my-space/my-space.component';
import { MySpaceToolBarComponent } from '../../components/smallComponents/my-space-tool-bar/my-space-tool-bar.component';
import { UserFormularyComponent } from '../../components/smallComponents/user-formulary/user-formulary.component';
import { PublicationContainerComponent } from '../../components/smallComponents/publication-container/publication-container.component';
import { LoginComponent } from '../../components/pagesComponents/login/login.component';
import { CreatePublicationFormComponent } from '../../components/smallComponents/create-publication-form/create-publication-form.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUserComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    HeadComponent,
    AppContentContainerComponent,
    IndexCardComponent,
    MySpaceComponent,
    MySpaceToolBarComponent,
    UserFormularyComponent,
    PublicationContainerComponent,
    LoginComponent,
    CreatePublicationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  exports: [
    ListUsersComponent,
    CreateUserComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    HeadComponent,
    AppContentContainerComponent,
    IndexCardComponent,
    MySpaceComponent,
    MySpaceToolBarComponent,
    UserFormularyComponent,
    PublicationContainerComponent,
    LoginComponent,
    CreatePublicationFormComponent
  ]
})
export class PersonalComponentsModule { }
