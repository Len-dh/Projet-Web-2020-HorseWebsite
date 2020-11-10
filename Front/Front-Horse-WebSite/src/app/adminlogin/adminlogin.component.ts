import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  admin = new Admin();
  msg = '';
  hide = false;

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  adminlogin() {
    this._service.loginAdminFromRemote(this.admin).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/admin-homepage']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Bad credentials, please enter valid email id and password';
      }
    );
  }
}
