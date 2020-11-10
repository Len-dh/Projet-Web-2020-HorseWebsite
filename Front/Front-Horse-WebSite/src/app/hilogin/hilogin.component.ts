import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorseInstructor } from '../horse-instructor';
import { RegistrationService } from '../registration.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hilogin',
  templateUrl: './hilogin.component.html',
  styleUrls: ['./hilogin.component.css'],
})
export class HiloginComponent implements OnInit {
  hi = new HorseInstructor();
  msg = '';
  hide = false;

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  loginHI() {
    this._service.loginHorseInstructorFromRemote(this.hi).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/instructor-homepage']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Bad credentials, please enter valid email id and password';
      }
    );
  }
}
