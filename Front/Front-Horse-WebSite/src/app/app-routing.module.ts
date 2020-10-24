import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { InstructorHomepageComponent } from './instructor-homepage/instructor-homepage.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { HorsesManagementComponent } from './horses-management/horses-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'account-recovery', component: AccountRecoveryComponent },
  { path: 'user-homepage', component: UserHomepageComponent },
  { path: 'instructor-homepage', component: InstructorHomepageComponent },
  { path: 'admin-homepage', component: AdminHomepageComponent },
  { path: 'horses-management', component: HorsesManagementComponent },
  { path: 'users-management', component: UsersManagementComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
