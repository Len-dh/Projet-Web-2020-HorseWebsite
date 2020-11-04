import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Rider } from '../rider';

@Component({
  selector: 'app-riderlogin',
  templateUrl: './riderlogin.component.html',
  styleUrls: ['./riderlogin.component.css'],
})
export class RiderloginComponent implements OnInit {
  rider = new Rider();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginRider() {
    this._service.loginRiderFromRemote(this.rider).subscribe(
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
