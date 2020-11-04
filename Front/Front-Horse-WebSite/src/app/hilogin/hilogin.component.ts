import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorseInstructor } from '../horse-instructor';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-hilogin',
  templateUrl: './hilogin.component.html',
  styleUrls: ['./hilogin.component.css'],
})
export class HiloginComponent implements OnInit {
  hi = new HorseInstructor();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginHI() {
    this._service.loginHorseInstructorFromRemote(this.hi).subscribe(
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
