import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Rider } from '../rider';

@Component({
  selector: 'app-riderregistration',
  templateUrl: './riderregistration.component.html',
  styleUrls: ['./riderregistration.component.css'],
})
export class RiderregistrationComponent implements OnInit {
  rider = new Rider();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  registerRider() {
    this._service.registerRiderFromRemote(this.rider).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/loginRider']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'error of your registration';
      }
    );
  }
}
