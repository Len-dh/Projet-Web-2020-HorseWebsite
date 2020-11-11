import { Component, OnInit } from '@angular/core';
import { Horse } from '../horse';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-horses-creation',
  templateUrl: './horses-creation.component.html',
  styleUrls: ['./horses-creation.component.css']
})
export class HorsesCreationComponent implements OnInit {
  horse = new Horse();
  msg = '';

  creationForm: FormGroup = new FormGroup({ });

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  createHorse() {
    this._service.registerHorseFromRemote(this.horse).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/horses-management']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'error of your registration';
      }
    );
  }

}
