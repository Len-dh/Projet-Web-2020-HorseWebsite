import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorHomepageComponent } from './instructor-homepage.component';

describe('InstructorHomepageComponent', () => {
  let component: InstructorHomepageComponent;
  let fixture: ComponentFixture<InstructorHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
