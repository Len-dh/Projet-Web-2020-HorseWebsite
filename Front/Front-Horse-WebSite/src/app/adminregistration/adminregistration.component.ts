import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css'],
})
export class AdminregistrationComponent implements OnInit {
  admin = new Admin();
  msg = '';
  hide = false;

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  registerAdmin() {
    this._service.registerAdminFromRemote(this.admin).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/users-management']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'error of your registration';
      }
    );
  }
}
