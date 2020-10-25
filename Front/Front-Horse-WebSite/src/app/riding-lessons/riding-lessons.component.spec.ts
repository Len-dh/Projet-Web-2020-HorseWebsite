import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidingLessonsComponent } from './riding-lessons.component';

describe('RidingLessonsComponent', () => {
  let component: RidingLessonsComponent;
  let fixture: ComponentFixture<RidingLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidingLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidingLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
