import { AfterViewInit, Component, ViewChild, Inject, Optional } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Horse } from '../horse';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';
import { Lesson } from '../lesson';
import { LessonService } from '../lesson.service';
import { Observable } from 'rxjs';
import { Rider } from '../rider';

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
  lessonsList: Lesson[] = [];
  lessons: Observable<Lesson[]>;
  displayedColumns: string[] = ['lessonDate', 'lessonTitle', 'lessonLevel', 'lessonInstructor', 'lessonGroupSize', 'lessonRecurrence'];
  dataSource = new MatTableDataSource<Lesson>(this.lessonsList);
  expandedElement: Lesson | null;
  horsesList: Horse[] = [];
  ridersList: Rider[] = [];

  saveHorsesChoiceForm: FormGroup = new FormGroup({ });

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

  saveHorsesChoice() { }
}