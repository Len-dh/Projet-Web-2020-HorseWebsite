import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDialogBoxComponent } from './users-dialog-box.component';

describe('UsersDialogBoxComponent', () => {
  let component: UsersDialogBoxComponent;
  let fixture: ComponentFixture<UsersDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
