import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Rider } from '../rider';
import { FormControl, FormGroup } from '@angular/forms';
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>>>>>>> 88829b0... first commit Back horse

@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.component.html',
  styleUrls: ['./account-recovery.component.css']
})
export class AccountRecoveryComponent implements OnInit {

<<<<<<< HEAD
  rider = new Rider();
  msg = '';

  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  recoveryForm: FormGroup = new FormGroup({
    email: new FormControl('')
  });

  sendRecoveryEmailToRider() {
    /*this._service.sendRecoveryEmailToRider(this.rider).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'error of your registration';
      }
    );*/
  }
}
=======
  form: FormGroup;
  public loginInvalid: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> 88829b0... first commit Back horse
