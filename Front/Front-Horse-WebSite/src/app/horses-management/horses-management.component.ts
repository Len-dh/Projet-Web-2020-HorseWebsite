import { AfterViewInit, Component, ViewChild, Inject, Optional } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HorsesDialogBoxComponent } from '../horses-dialog-box/horses-dialog-box.component';
import { Router } from "@angular/router"
import { Horse } from '../horse';
import { HorseService } from '../horse.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-horses-management',
  templateUrl: './horses-management.component.html',
  styleUrls: ['./horses-management.component.css']
})
export class HorsesManagementComponent implements AfterViewInit {
  horsesList: Horse[] = [];
  horses: Observable<Horse[]>;
  displayedColumns: string[] = ['name', 'breed', 'age', 'gender', 'action'];
  dataSource = new MatTableDataSource<Horse>(this.horsesList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private router: Router, private horseService: HorseService) { }

  ngOnInit(): void {
    this.horseService.getHorseList().subscribe(result => this.initTable(result));
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

  openDialog(row): void {
    const dialogRef = this.dialog.open(HorsesDialogBoxComponent, {
      width: '400px',
      data: { horseName: row.horseName, horseBreed: row.horseBreed, horseAge: row.horseAge, horseGender: row.horseGender }
    });
  }

  initTable(list){
    this.horsesList = list;
    this.dataSource = new MatTableDataSource<Horse>(this.horsesList);
    this.dataSource.paginator = this.paginator;
  }
}