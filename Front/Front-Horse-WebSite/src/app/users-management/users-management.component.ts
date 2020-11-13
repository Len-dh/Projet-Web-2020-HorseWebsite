import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogBoxComponent } from '../users-dialog-box/users-dialog-box.component';
import { Router } from "@angular/router"
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { HorseInstructor } from '../horse-instructor';
import { HorseInstructorService } from '../horse-instructor.service';
import { Rider } from '../rider';
import { RiderService } from '../rider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})

export class UsersManagementComponent implements AfterViewInit {
  adminsList: Admin[] = [];
  admins: Observable<Admin[]>;
  displayedColumnsAdmin: string[] = ['adminFirstName', 'adminName', 'type', 'action'];
  dataSourceAdmin = new MatTableDataSource<Admin>(this.adminsList);

  horseInstructorsList: HorseInstructor[] = [];
  horseInstructor: Observable<HorseInstructor[]>;
  displayedColumnsHorseInstructor: string[] = ['horseInstructorFirstName', 'horseInstructorName', 'type', 'action'];
  dataSourceHorseInstructor = new MatTableDataSource<HorseInstructor>(this.horseInstructorsList);

  ridersList: Rider[] = [];
  riders: Observable<Rider[]>;
  displayedColumnsRider: string[] = ['riderFirstName', 'riderName', 'type', 'action'];
  dataSourceRider = new MatTableDataSource<Rider>(this.ridersList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private router: Router, private adminService: AdminService, private horseInstructorService: HorseInstructorService, private riderService: RiderService) { }

  ngOnInit(): void {
    this.adminService.getAdminList().subscribe(result => this.initTableAdmin(result));
    this.horseInstructorService.getHorseInstructorList().subscribe(result => this.initTableHI(result));
    this.riderService.getRiderList().subscribe(result => this.initTableRider(result));
  }

  ngAfterViewInit() {
    this.dataSourceAdmin.paginator = this.paginator;
    this.dataSourceAdmin.sort = this.sort;

    this.dataSourceHorseInstructor.paginator = this.paginator;
    this.dataSourceHorseInstructor.sort = this.sort;

    this.dataSourceRider.paginator = this.paginator;
    this.dataSourceRider.sort = this.sort;
  }

  applyFilterAdmin(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAdmin.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceAdmin.paginator) {
      this.dataSourceAdmin.paginator.firstPage();
    }
  }

  applyFilterHI(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceHorseInstructor.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceHorseInstructor.paginator) {
      this.dataSourceHorseInstructor.paginator.firstPage();
    }
  }

  applyFilterRider(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceRider.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceRider.paginator) {
      this.dataSourceRider.paginator.firstPage();
    }
  }

  openDialogAdmin(row): void {
    const dialogRef = this.dialog.open(UsersDialogBoxComponent, {
      width: '650px',
      data: { adminFirstName: row.adminFirstName, adminName: row.adminName, adminEmailId: row.adminEmailId, adminPhoneNumber: row.adminPhoneNumber, type: "Administrateur" }
    });
  }

  openDialogHI(row): void {
    const dialogRef = this.dialog.open(UsersDialogBoxComponent, {
      width: '650px',
      data: { horseInstructorFirstName: row.horseInstructorFirstName, horseInstructorName: row.horseInstructorName, horseInstructorEmailId: row.horseInstructorEmailId, horseInstructorPhoneNumber: row.horseInstructorPhoneNumber, type: "Moniteur" }
    });
  }

  openDialogRider(row): void {
    const dialogRef = this.dialog.open(UsersDialogBoxComponent, {
      width: '650px',
      data: { riderFirstName: row.riderFirstName, riderName: row.riderName, riderEmailId: row.riderEmailId, riderPhoneNumber: row.riderPhoneNumber, type: "Cavalier" }
    });
  }

  initTableAdmin(list){
    this.adminsList = list;
    this.dataSourceAdmin = new MatTableDataSource<Admin>(this.adminsList);
    this.dataSourceAdmin.paginator = this.paginator;
  }

  initTableHI(list){
    this.horseInstructorsList = list;
    this.dataSourceHorseInstructor = new MatTableDataSource<HorseInstructor>(this.horseInstructorsList);
    this.dataSourceHorseInstructor.paginator = this.paginator;
  }

  initTableRider(list){
    this.ridersList = list;
    this.dataSourceRider = new MatTableDataSource<Rider>(this.ridersList);
    this.dataSourceRider.paginator = this.paginator;
  }
}
