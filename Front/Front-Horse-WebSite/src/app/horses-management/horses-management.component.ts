import { AfterViewInit, Component, ViewChild, Inject, Optional } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HorsesDialogBoxComponent } from '../horses-dialog-box/horses-dialog-box.component';
import { Router } from "@angular/router"

export interface HorseData {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: string;
}

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const GENDER: string[] = ['M', 'F'];

const BREEDS: string[] = ['Anglo-Arabian', 'Canadian horse', 'Castillonnais'];

@Component({
  selector: 'app-horses-management',
  templateUrl: './horses-management.component.html',
  styleUrls: ['./horses-management.component.css']
})
export class HorsesManagementComponent implements AfterViewInit {
  //horsesList: Horses[] = [];
  displayedColumns: string[] = ['name', 'breed', 'age', 'gender', 'action'];
  dataSource: MatTableDataSource<HorseData>;
  //dataSource = new MatTableDataSource<Horses>(this.horsesList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private router: Router) {
    // Create 100 horses
    const horses = Array.from({ length: 100 }, (_, k) => createNewHorse(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(horses);
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
      data: { name: row.name, breed: row.breed, age: row.age, gender: row.gender }
    });
  }
}

/** Builds and returns a new Horse. */
function createNewHorse(id: number): HorseData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const breed = BREEDS[Math.round(Math.random() * (BREEDS.length - 1))];
  const age = Math.round(Math.random() * 30);
  const gender = GENDER[Math.round(Math.random() * (GENDER.length - 1))];

  return {
    id: id.toString(),
    name: name,
    breed: breed,
    age: age.toString(),
    gender: gender,
  };
}