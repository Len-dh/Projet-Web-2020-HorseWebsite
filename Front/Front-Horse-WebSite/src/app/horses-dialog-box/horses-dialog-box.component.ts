import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Horse } from '../horse';
import { HorseService } from '../horse.service';

@Component({
  selector: 'app-horses-dialog-box',
  templateUrl: './horses-dialog-box.component.html',
  styleUrls: ['./horses-dialog-box.component.css']
})

export class HorsesDialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HorsesDialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private horseService: HorseService) {}

  ngOnInit(): void {  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
