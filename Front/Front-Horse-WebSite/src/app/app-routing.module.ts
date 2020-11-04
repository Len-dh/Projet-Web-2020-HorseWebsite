import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { HiloginComponent } from './hilogin/hilogin.component';
import { HiregistrationComponent } from './hiregistration/hiregistration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { RiderloginComponent } from './riderlogin/riderlogin.component';
import { RiderregistrationComponent } from './riderregistration/riderregistration.component';
import { WaloginComponent } from './walogin/walogin.component';
import { WaregistrationComponent } from './waregistration/waregistration.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginsuccess', component: LoginsuccessComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'loginAdmin', component: AdminloginComponent },
  { path: 'loginHI', component: HiloginComponent },
  { path: 'loginRider', component: RiderloginComponent },
  { path: 'loginWA', component: WaloginComponent },
  { path: 'registeradmin', component: AdminregistrationComponent },
  { path: 'registerHI', component: HiregistrationComponent },
  { path: 'registerRider', component: RiderregistrationComponent },
  { path: 'registerWA', component: WaregistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
