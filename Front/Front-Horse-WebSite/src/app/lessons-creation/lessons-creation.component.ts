import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lesson } from '../lesson';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";
import { DateAdapter } from '@angular/material/core';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-lessons-creation',
  templateUrl: './lessons-creation.component.html',
  styleUrls: ['./lessons-creation.component.css']
})
export class LessonsCreationComponent implements OnInit {

  createLessonForm: FormGroup;
  lesson = new Lesson();
  msg = '';
  recurrent = false;

  constructor(private _formBuilder: FormBuilder, private _adapter: DateAdapter<any>, private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this._adapter.setLocale('fr');
    this.createLessonForm = this._formBuilder.group ({
      lessonTitle: [''],
      lessonDate: ['', Validators.required],
      lessonStart: ['', Validators.required],
      lessonEnd: ['', Validators.required],
      lessonGroupSize: ['', Validators.required],
      lessonLevel: ['', Validators.required],
      lessonRecurrence: ['', Validators.required],
    });
  }

  createLesson() {
    console.log(this.lesson.lessonGroupSize);
    /*this._service.createLesson(this.lesson).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/lessons-management']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'error of your registration';
      }
    );*/
  }

  toggle(event){
    this.recurrent = event.checked;
  }

}
