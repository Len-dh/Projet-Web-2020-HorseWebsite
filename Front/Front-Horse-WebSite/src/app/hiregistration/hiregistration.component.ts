import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorseInstructor } from '../horse-instructor';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-hiregistration',
  templateUrl: './hiregistration.component.html',
  styleUrls: ['./hiregistration.component.css'],
})
export class HiregistrationComponent implements OnInit {
  hi = new HorseInstructor();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  registerHI() {
    this._service.registerHorseInstructorFromRemote(this.hi).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/loginHI']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'error of your registration';
      }
    );
  }
}
