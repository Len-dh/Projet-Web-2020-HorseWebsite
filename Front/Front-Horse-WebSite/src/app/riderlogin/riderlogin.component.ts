import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Rider } from '../rider';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-riderlogin',
  templateUrl: './riderlogin.component.html',
  styleUrls: ['./riderlogin.component.css'],
})
export class RiderloginComponent implements OnInit {
  rider = new Rider();
  msg = '';
  hide = false;

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  loginRider() {
    this._service.loginRiderFromRemote(this.rider).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/user-homepage']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Bad credentials, please enter valid email id and password';
      }
    );
  }
}
