import { Component, OnInit } from '@angular/core';
import {DateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-lessons-creation',
  templateUrl: './lessons-creation.component.html',
  styleUrls: ['./lessons-creation.component.css']
})
export class LessonsCreationComponent implements OnInit {

  constructor(private _adapter: DateAdapter<any>) { }

  ngOnInit(): void {
    this._adapter.setLocale('fr');
  }

}
