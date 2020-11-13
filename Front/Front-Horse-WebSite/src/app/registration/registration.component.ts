import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, Validator, Validators, ReactiveFormsModule } from "@angular/forms";
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  user = new User();
  hide = false;

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private _service: RegistrationService) { }

  ngOnInit(): void {
  }

  registrationUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      (data) => console.log('response recieved'),
      (error) => console.log('exception occured')
    );
  }

}
