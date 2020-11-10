import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, Validator, Validators, ReactiveFormsModule } from "@angular/forms";
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login-super-admin',
  templateUrl: './login-super-admin.component.html',
  styleUrls: ['./login-super-admin.component.css']
})
export class LoginSuperAdminComponent implements OnInit {

  user = new User();
  hide = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private _service: RegistrationService) { }

  ngOnInit(): void { }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      (data) => console.log('response recieved'),
      (error) => console.log('exception occured')
    );
  }
}
