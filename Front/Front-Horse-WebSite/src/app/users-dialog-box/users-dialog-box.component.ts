import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserData {
  id: string;
  lastname: string;
  surname: string;
  email: string;
  phone: string;
  type: string;
  license: string;
}

@Component({
  selector: 'users-app-dialog-box',
  templateUrl: './users-dialog-box.component.html',
  styleUrls: ['./users-dialog-box.component.css']
})
export class UsersDialogBoxComponent {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<UsersDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
