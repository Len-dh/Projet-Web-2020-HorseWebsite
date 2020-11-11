import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegistrationComponent } from './registration/registration.component';
import { InstructorHomepageComponent } from './instructor-homepage/instructor-homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { HorsesManagementComponent } from './horses-management/horses-management.component';
import { HorsesDialogBoxComponent } from './horses-dialog-box/horses-dialog-box.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { UsersDialogBoxComponent } from './users-dialog-box/users-dialog-box.component';
import { SuperAdminHomepageComponent } from './super-admin-homepage/super-admin-homepage.component';
import { RidingLessonsComponent } from './riding-lessons/riding-lessons.component';
import { LessonsDialogBoxComponent } from './lessons-dialog-box/lessons-dialog-box.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { LoginInstructorComponent } from './login-instructor/login-instructor.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginSuperAdminComponent } from './login-super-admin/login-super-admin.component';
import { LessonsManagementComponent } from './lessons-management/lessons-management.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { LessonsCreationComponent } from './lessons-creation/lessons-creation.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { HiloginComponent } from './hilogin/hilogin.component';
import { HiregistrationComponent } from './hiregistration/hiregistration.component';
import { RiderloginComponent } from './riderlogin/riderlogin.component';
import { RiderregistrationComponent } from './riderregistration/riderregistration.component';
import { WaloginComponent } from './walogin/walogin.component';
import { WaregistrationComponent } from './waregistration/waregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    RegistrationComponent,
    HomeComponent,
    InstructorHomepageComponent,
    NavigationComponent,
    UserHomepageComponent,
    AdminHomepageComponent,
    AccountRecoveryComponent,
    HorsesManagementComponent,
    HorsesDialogBoxComponent,
    UsersManagementComponent,
    UsersDialogBoxComponent,
    SuperAdminHomepageComponent,
    RidingLessonsComponent,
    LessonsDialogBoxComponent,
    AccountManagementComponent,
    LoginInstructorComponent,
    LoginAdminComponent,
    LoginSuperAdminComponent,
    LessonsManagementComponent,
    LessonsCreationComponent,
    AdminloginComponent,
    AdminregistrationComponent,
    HiloginComponent,
    HiregistrationComponent,
    RiderloginComponent,
    RiderregistrationComponent,
    WaloginComponent,
    WaregistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    MatGridListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
