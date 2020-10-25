import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { LessonsDialogBoxComponent } from '../lessons-dialog-box/lessons-dialog-box.component';

export interface LessonData {
  idLesson: number;
  schedules: Date;
  groupSize: number;
  level: number;
  instructor: string;
  recurrence: string;
}

const INSTRUCTORS: string[] = [
  'James', 'Ben', 'Laura'
];

@Component({
  selector: 'app-riding-lessons',
  templateUrl: './riding-lessons.component.html',
  styleUrls: ['./riding-lessons.component.css']
})
export class RidingLessonsComponent implements AfterViewInit {

  displayedColumns: string[] = ['idLesson', 'schedules', 'groupSize', 'level', 'recurrence', 'instructor', 'action'];
  dataSource: MatTableDataSource<LessonData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 courses
    const lessons = Array.from({ length: 100 }, (_, k) => createNewLesson(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(lessons);
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

  openDialog(action, obj): void {
    obj.action = action;
    const dialogRef = this.dialog.open(LessonsDialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Ajouter') {
        //this.addRowData(result.data);
      } else if (result.event == 'Modifier') {
        //this.updateRowData(result.data);
      } else if (result.event == 'Supprimer') {
        //this.deleteRowData(result.data);
      }
    });
  }
}

/** Builds and returns a new Lesson. */

function createNewLesson(id: number): LessonData {
  const schedules = new Date('October 13, 2020 14:00:00');
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
    idLesson: id,
    schedules: schedules,
    groupSize: groupSize,
    level: level,
    instructor: instructor,
    recurrence: recurrenceString
  };
}
