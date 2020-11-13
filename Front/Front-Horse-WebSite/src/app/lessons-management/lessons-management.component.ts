import { AfterViewInit, Component, ViewChild, Inject, Optional } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Lesson } from '../lesson';
import { LessonService } from '../lesson.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lessons-management',
  templateUrl: './lessons-management.component.html',
  styleUrls: ['./lessons-management.component.css'],

})
export class LessonsManagementComponent implements AfterViewInit {
  lessonsList: Lesson[] = [];
  lessons: Observable<Lesson[]>;
  displayedColumns: string[] = ['lessonDate', 'lessonTitle', 'lessonLevel', 'lessonInstructor', 'lessonGroupSize', 'lessonRecurrence'];
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
}