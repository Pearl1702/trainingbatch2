import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterial } from './angular.material';
import {AuthService} from './sharedServices/services/auth.service';
import {UserService} from './sharedServices/services/user.service';
import { appRoutes } from './app.route';
import { AppComponent } from './app.component';
import { LoginSection } from './auth/login/login.component';
import { PricingSection } from './pricing/pricing.component';
import { FooterComponent } from './global/footer/footer.component';
import { HeaderComponent } from './global/header/header.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, AngularMaterial,HttpClientModule,
    RouterModule.forRoot (appRoutes)
  ],
  declarations: [
    AppComponent,
    FooterComponent, HeaderComponent,
    LoginSection, PricingSection
  ],
  providers: [AuthService, UserService],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
