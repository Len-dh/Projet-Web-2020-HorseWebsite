import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, Validator, Validators, ReactiveFormsModule } from "@angular/forms";
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login-instructor',
  templateUrl: './login-instructor.component.html',
  styleUrls: ['./login-instructor.component.css']
})
export class LoginInstructorComponent implements OnInit {
  
  user = new User();
  hide = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private _service: RegistrationService) {}

  ngOnInit(): void {}

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      (data) => console.log('response recieved'),
      (error) => console.log('exception occured')
    );
  }
}
