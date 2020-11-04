import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginsuccessComponent } from './adminloginsuccess.component';

describe('AdminloginsuccessComponent', () => {
  let component: AdminloginsuccessComponent;
  let fixture: ComponentFixture<AdminloginsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminloginsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
