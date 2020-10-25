import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  hide = false;

  constructor() { }

  ngOnInit(): void {
  }

}
