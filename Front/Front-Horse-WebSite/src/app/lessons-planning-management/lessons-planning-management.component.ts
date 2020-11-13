import { AfterViewInit, Component, ViewChild, Inject, Optional } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Lesson } from '../lesson';
import { Horse } from '../horse';
import { Rider } from '../rider';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';

const INSTRUCTORS: string[] = [
  'James', 'Ben', 'Laura'
];

@Component({
  selector: 'app-lessons-planning-management',
  templateUrl: './lessons-planning-management.component.html',
  styleUrls: ['./lessons-planning-management.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class LessonsPlanningManagementComponent implements AfterViewInit {
  ELEMENT_DATA: Lesson[] = [];
  displayedColumns: string[] = ['schedules', 'title', 'level', 'instructor', 'groupSize', 'recurrence'];
  expandedElement: Lesson | null;
  riders: Rider[] = [{riderName: 'nom1', riderId: 1, riderEmailId: 'test@test.test', riderFirstName: 'prenom1', riderPassword: 'aze', riderPhoneNumber: 12}, {riderName: 'nom2', riderId: 1, riderEmailId: 'test@test.test', riderFirstName: 'prenom2', riderPassword: 'aze', riderPhoneNumber: 12}];
  horses: Horse[] = [{horseName: 'nomh1', horseId: 1, horseAge: 10, horseBreed: 'race', horseGender: "F", id:1}, {horseName: 'nomh2', horseId: 1, horseAge: 10, horseBreed: 'race', horseGender: "F", id:2}];

  saveHorsesChoiceForm: FormGroup = new FormGroup({ });

  dataSource: MatTableDataSource<Lesson>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 courses
    const courses = Array.from({ length: 100 }, (_, k) => createNewLesson(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(courses);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  saveHorsesChoice() { }
}

/** Builds and returns a new Course. */

function createNewLesson(id: number): Lesson {
  const lessonTitle = "Titre";
  const schedulesStart = new Date('October 13, 2020 14:00:00');
  const schedulesEnd = new Date('October 13, 2020 16:00:00');
  const groupSize = Math.round(Math.random() * (11 - 1) + 1);
  const level = Math.round(Math.random() * (8 - 1) + 1);
  const instructor = INSTRUCTORS[Math.round(Math.random() * (INSTRUCTORS.length - 1))];
  const recurrenceInt = Math.floor(Math.random() * Math.floor(2));

  if (recurrenceInt == 0) {
    var recurrenceString = 'Non';
  } else {
    var recurrenceString = 'Oui';
  }
  return {
    lessonId: id,
    lessonTitle: lessonTitle,
    lessonDate: schedulesStart,
    lessonStart: schedulesStart,
    lessonEnd: schedulesEnd,
    lessonGroupSize: groupSize,
    lessonLevel: level,
    lessonInstructor: instructor,
    lessonRecurrence: recurrenceString
  };
}
