import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorseInstructor } from '../horse-instructor';
import { RegistrationService } from '../registration.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hiregistration',
  templateUrl: './hiregistration.component.html',
  styleUrls: ['./hiregistration.component.css'],
})
export class HiregistrationComponent implements OnInit {
  hi = new HorseInstructor();
  msg = '';
  hide = false;

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  registerHI() {
    this._service.registerHorseInstructorFromRemote(this.hi).subscribe(
      (data) => {
        console.log('response recieved');
<<<<<<< HEAD
        this._router.navigate(['/users-management']);
=======
        this._router.navigate(['/loginHI']);
>>>>>>> 88829b0... first commit Back horse
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'error of your registration';
      }
    );
  }
}
