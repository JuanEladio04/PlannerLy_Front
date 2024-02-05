import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material ----------------------------------------------------------------
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

//Personal components ----------------------------------------------------------------
import { HeadComponent } from './components/layouts/head/head.component';
import { AppContentContainerComponent } from './components/layouts/app-content-container/app-content-container.component';
import { IndexCardComponent } from './components/smallComponents/index-card/index-card.component';
import { PageLayoutComponent } from './components/layouts/page-layout/page-layout.component';
import { MySpaceComponent } from './components/pagesComponents/my-space/my-space.component';
import { MySpaceToolBarComponent } from './components/smallComponents/my-space-tool-bar/my-space-tool-bar.component';
import { ListUsersComponent } from './components/pagesComponents/list-users/list-users.component';
import { CreateUserComponent } from './components/pagesComponents/create-user/create-user.component';
import { MainComponent } from './components/pagesComponents/main/main.component';
import { FooterComponent } from './components/smallComponents/footer/footer.component';
import { NavbarComponent } from './components/smallComponents/navbar/navbar.component';
import { PublicationContainerComponent } from './components/smallComponents/publication-container/publication-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    CreateUserComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    HeadComponent,
    AppContentContainerComponent,
    IndexCardComponent,
    PageLayoutComponent,
    MySpaceComponent,
    MySpaceToolBarComponent,
    PublicationContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
