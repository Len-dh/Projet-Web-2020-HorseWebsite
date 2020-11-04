import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css'],
})
export class AdminregistrationComponent implements OnInit {
  admin = new Admin();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit(): void {}

  registerAdmin() {
    this._service.registerAdminFromRemote(this.admin).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/loginAdmin']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'error of your registration';
      }
    );
  }
}
