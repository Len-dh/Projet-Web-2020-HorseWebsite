import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsPlanningManagementComponent } from './lessons-planning-management.component';

describe('LessonsPlanningManagementComponent', () => {
  let component: LessonsPlanningManagementComponent;
  let fixture: ComponentFixture<LessonsPlanningManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsPlanningManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsPlanningManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
