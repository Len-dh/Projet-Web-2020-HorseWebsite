import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'users-app-dialog-box',
  templateUrl: './users-dialog-box.component.html',
  styleUrls: ['./users-dialog-box.component.css']
})
export class UsersDialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UsersDialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdminService) {}

  ngOnInit(): void {  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}