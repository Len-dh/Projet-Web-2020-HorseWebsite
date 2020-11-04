import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { WebsiteAdmin } from '../website-admin';

@Component({
  selector: 'app-walogin',
  templateUrl: './walogin.component.html',
  styleUrls: ['./walogin.component.css'],
})
export class WaloginComponent implements OnInit {
  wa = new WebsiteAdmin();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginWA() {
    this._service.loginWebsiteAdminidtratorFromRemote(this.wa).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/loginsuccess']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Bad credentials, please enter valid email id and password';
      }
    );
  }
}
