<<<<<<< HEAD
import { AfterViewInit, Component, ViewChild, Inject, Optional } from '@angular/core';
=======
import {
  AfterViewInit,
  Component,
  ViewChild,
  Inject,
  Optional,
} from '@angular/core';
>>>>>>> 88829b0... first commit Back horse
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Lesson } from '../lesson';

<<<<<<< HEAD
const INSTRUCTORS: string[] = [
  'James', 'Ben', 'Laura'
];
=======
const INSTRUCTORS: string[] = ['James', 'Ben', 'Laura'];
>>>>>>> 88829b0... first commit Back horse

@Component({
  selector: 'app-lessons-management',
  templateUrl: './lessons-management.component.html',
  styleUrls: ['./lessons-management.component.css'],
<<<<<<< HEAD

})
export class LessonsManagementComponent implements AfterViewInit {
  ELEMENT_DATA: Lesson[] = [];
  displayedColumns: string[] = ['schedules', 'title', 'level', 'instructor', 'groupSize', 'recurrence'];
=======
})
export class LessonsManagementComponent implements AfterViewInit {
  ELEMENT_DATA: Lesson[] = [];
  displayedColumns: string[] = [
    'schedules',
    'level',
    'instructor',
    'groupSize',
    'recurrence',
  ];
>>>>>>> 88829b0... first commit Back horse
  dataSource: MatTableDataSource<Lesson>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 courses
<<<<<<< HEAD
    const courses = Array.from({ length: 100 }, (_, k) => createNewLesson(k + 1));
=======
    const courses = Array.from({ length: 100 }, (_, k) =>
      createNewLesson(k + 1)
    );
>>>>>>> 88829b0... first commit Back horse

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
}

/** Builds and returns a new Course. */

function createNewLesson(id: number): Lesson {
<<<<<<< HEAD
  const lessonTitle = "Titre";
=======
>>>>>>> 88829b0... first commit Back horse
  const schedulesStart = new Date('October 13, 2020 14:00:00');
  const schedulesEnd = new Date('October 13, 2020 16:00:00');
  const groupSize = Math.round(Math.random() * (11 - 1) + 1);
  const level = Math.round(Math.random() * (8 - 1) + 1);
<<<<<<< HEAD
  const instructor = INSTRUCTORS[Math.round(Math.random() * (INSTRUCTORS.length - 1))];
=======
  const instructor =
    INSTRUCTORS[Math.round(Math.random() * (INSTRUCTORS.length - 1))];
>>>>>>> 88829b0... first commit Back horse
  const recurrenceInt = Math.floor(Math.random() * Math.floor(2));

  if (recurrenceInt == 0) {
    var recurrenceString = 'Non';
  } else {
    var recurrenceString = 'Oui';
  }
  return {
    lessonId: id,
<<<<<<< HEAD
    lessonTitle: lessonTitle,
=======
    lessonTitle: String,
>>>>>>> 88829b0... first commit Back horse
    lessonDate: schedulesStart,
    lessonStart: schedulesStart,
    lessonEnd: schedulesEnd,
    lessonGroupSize: groupSize,
    lessonLevel: level,
    lessonInstructor: instructor,
<<<<<<< HEAD
    lessonRecurrence: recurrenceString
  };
}
=======
    lessonRecurrence: recurrenceString,
  };
}
>>>>>>> 88829b0... first commit Back horse
