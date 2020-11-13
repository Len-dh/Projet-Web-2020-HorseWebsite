import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseInstructorDetailsComponent } from './horse-instructor-details.component';

describe('HorseInstructorDetailsComponent', () => {
  let component: HorseInstructorDetailsComponent;
  let fixture: ComponentFixture<HorseInstructorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseInstructorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseInstructorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
