import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { WebsiteAdmin } from '../website-admin';

@Component({
  selector: 'app-waregistration',
  templateUrl: './waregistration.component.html',
  styleUrls: ['./waregistration.component.css'],
})
export class WaregistrationComponent implements OnInit {
  wa = new WebsiteAdmin();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

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
