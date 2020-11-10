import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { WebsiteAdmin } from '../website-admin';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-walogin',
  templateUrl: './walogin.component.html',
  styleUrls: ['./walogin.component.css'],
})
export class WaloginComponent implements OnInit {
  wa = new WebsiteAdmin();
  msg = '';
  hide = false;

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  loginWA() {
    this._service.loginWebsiteAdminidtratorFromRemote(this.wa).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/super-admin-homepage']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Bad credentials, please enter valid email id and password';
      }
    );
  }
}
