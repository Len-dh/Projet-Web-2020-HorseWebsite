import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";
import { DateAdapter } from '@angular/material/core';
import { Lesson } from '../lesson';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lessons-creation',
  templateUrl: './lessons-creation.component.html',
  styleUrls: ['./lessons-creation.component.css']
})
export class LessonsCreationComponent implements OnInit {
  lesson = new Lesson();
  msg = '';
  recurrent = false;

  constructor(private _adapter: DateAdapter<any>, private _service: LessonService, private _router: Router) { }

  ngOnInit(): void {}

  createLessonForm: FormGroup = new FormGroup({ });

  createLesson() {
    this._service.createLesson(this.lesson).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/lessons-management']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'error of your registration';
      }
    );
  }
}
