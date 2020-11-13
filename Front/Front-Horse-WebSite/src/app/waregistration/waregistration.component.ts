import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { WebsiteAdmin } from '../website-admin';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-waregistration',
  templateUrl: './waregistration.component.html',
  styleUrls: ['./waregistration.component.css'],
})
export class WaregistrationComponent implements OnInit {
  wa = new WebsiteAdmin();
  msg = '';
  hide = false;

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  registerWA() {
    this._service.registerWebsiteAdministratorFromRemote(this.wa).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/loginWA']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'error of your registration';
      }
    );
  }
}
