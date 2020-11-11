import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: string;
}

@Component({
  selector: 'app-horses-dialog-box',
  templateUrl: './horses-dialog-box.component.html',
  styleUrls: ['./horses-dialog-box.component.css']
})

export class HorsesDialogBoxComponent {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<HorsesDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UsersData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
