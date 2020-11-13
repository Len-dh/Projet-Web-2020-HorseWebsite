import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { LessonsDialogBoxComponent } from '../lessons-dialog-box/lessons-dialog-box.component';
import { Lesson } from '../lesson';
import { LessonService } from '../lesson.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-riding-lessons',
  templateUrl: './riding-lessons.component.html',
  styleUrls: ['./riding-lessons.component.css']
})
export class RidingLessonsComponent implements AfterViewInit {
  lessonsList: Lesson[] = [];
  lessons: Observable<Lesson[]>;
  displayedColumns: string[] = ['lessonDate', 'lessonTitle', 'lessonLevel', 'lessonInstructor', 'lessonGroupSize', 'lessonRecurrence', 'action'];
  dataSource = new MatTableDataSource<Lesson>(this.lessonsList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private lessonservice: LessonService) { }

  ngOnInit(): void {
    this.lessonservice.getLessonList().subscribe(result => this.initTable(result));
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

  initTable(list){
    this.lessonsList = list;
    this.dataSource = new MatTableDataSource<Lesson>(this.lessonsList);
    this.dataSource.paginator = this.paginator;
  }

  public isLessonSelected(lessonId) {
    //return this.currentLesson.some(item => item.lessonId === lessonId);
  }

  public registerForALesson(event: any) {
    //this.lessonService.addLesson(1,parseInt(event.currentTarget.value));
  }
}