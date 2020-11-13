import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogBoxComponent } from '../users-dialog-box/users-dialog-box.component';

export interface UserData {
  id: string;
  lastname: string;
  surname: string;
  email: string;
  phone: string;
  type: string;
  license: string;
}

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const TYPES: string[] = [
  'Moniteur', 'Cavalier', 'Administrateur'
];

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})

export class UsersManagementComponent implements AfterViewInit {
  displayedColumns: string[] = ['lastname', 'surname', 'type', 'action'];
  dataSource: MatTableDataSource<UserData>;

  lastname: string;
  surname: string;
  email: string;
  phone: string;
  type: string;
  license: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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
    const dialogRef = this.dialog.open(UsersDialogBoxComponent, {
      width: '650px',
      data: { lastname: row.lastname, surname: row.surname, email: row.email, phone: row.phone, type: row.type, license: row.license }
    });
  }
}


/** Builds and returns a new User. */

function createNewUser(id: number): UserData {
  const lastname = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const surname = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const email = "aaa@bbb.ccc";
  const license = "0123456789";
  const phone = "0123456789";
  const type = TYPES[Math.round(Math.random() * (TYPES.length - 1))];

  return {
    id: id.toString(),
    lastname: lastname,
    surname: surname,
    email: email,
    phone: phone,
    type: type,
    license: license,
  };
}
