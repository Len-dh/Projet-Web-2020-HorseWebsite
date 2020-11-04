import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminloginsuccessComponent } from './adminloginsuccess/adminloginsuccess.component';
import { HiregistrationComponent } from './hiregistration/hiregistration.component';
import { HiloginComponent } from './hilogin/hilogin.component';
import { HiloginsuccessComponent } from './hiloginsuccess/hiloginsuccess.component';
import { RiderregistrationComponent } from './riderregistration/riderregistration.component';
import { RiderloginsuccessComponent } from './riderloginsuccess/riderloginsuccess.component';
import { RiderloginComponent } from './riderlogin/riderlogin.component';
import { WaloginComponent } from './walogin/walogin.component';
import { WaloginsuccessComponent } from './waloginsuccess/waloginsuccess.component';
import { WaregistrationComponent } from './waregistration/waregistration.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent, AdminregistrationComponent, AdminloginComponent, AdminloginsuccessComponent, HiregistrationComponent, HiloginComponent, HiloginsuccessComponent, RiderregistrationComponent, RiderloginsuccessComponent, RiderloginComponent, WaloginComponent, WaloginsuccessComponent, WaregistrationComponent, HomepageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
