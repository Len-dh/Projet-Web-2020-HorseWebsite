import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsesManagementComponent } from './horses-management.component';

describe('HorsesManagementComponent', () => {
  let component: HorsesManagementComponent;
  let fixture: ComponentFixture<HorsesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorsesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
