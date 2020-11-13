import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseInstructorListComponent } from './horse-instructor-list.component';

describe('HorseInstructorListComponent', () => {
  let component: HorseInstructorListComponent;
  let fixture: ComponentFixture<HorseInstructorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseInstructorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseInstructorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
