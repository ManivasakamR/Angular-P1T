import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Approute } from './app.routes'
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MbodyComponent } from './mbody/mbody.component';
import { Tc1Component } from './tc1/tc1.component';
import { Tc2Component } from './tc2/tc2.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    MbodyComponent,
    Tc1Component,
    Tc2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
