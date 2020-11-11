import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginInstructorComponent } from './login-instructor/login-instructor.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginSuperAdminComponent } from './login-super-admin/login-super-admin.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { InstructorHomepageComponent } from './instructor-homepage/instructor-homepage.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { HorsesManagementComponent } from './horses-management/horses-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { SuperAdminHomepageComponent } from './super-admin-homepage/super-admin-homepage.component';
import { RidingLessonsComponent } from './riding-lessons/riding-lessons.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { LessonsManagementComponent } from './lessons-management/lessons-management.component';
import { LessonsCreationComponent } from './lessons-creation/lessons-creation.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { HiloginComponent } from './hilogin/hilogin.component';
import { HiregistrationComponent } from './hiregistration/hiregistration.component';
import { RiderloginComponent } from './riderlogin/riderlogin.component';
import { RiderregistrationComponent } from './riderregistration/riderregistration.component';
import { WaloginComponent } from './walogin/walogin.component';
import { WaregistrationComponent } from './waregistration/waregistration.component';
import { HorsesCreationComponent } from './horses-creation/horses-creation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'login-instructor', component: LoginInstructorComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'login-super-admin', component: LoginSuperAdminComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'account-recovery', component: AccountRecoveryComponent },
  { path: 'user-homepage', component: UserHomepageComponent },
  { path: 'instructor-homepage', component: InstructorHomepageComponent },
  { path: 'admin-homepage', component: AdminHomepageComponent },
  { path: 'horses-management', component: HorsesManagementComponent },
  { path: 'horses-creation', component: HorsesCreationComponent },
  { path: 'users-management', component: UsersManagementComponent },
  { path: 'super-admin-homepage', component: SuperAdminHomepageComponent },
  { path: 'riding-lessons', component: RidingLessonsComponent },
  { path: 'account-management', component: AccountManagementComponent },
  { path: 'lessons-management', component: LessonsManagementComponent },
  { path: 'lessons-creation', component: LessonsCreationComponent },
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
export class AppRoutingModule { }
