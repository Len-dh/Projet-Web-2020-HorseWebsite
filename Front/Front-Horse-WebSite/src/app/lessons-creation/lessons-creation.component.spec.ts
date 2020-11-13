import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsCreationComponent } from './lessons-creation.component';

describe('LessonsCreationComponent', () => {
  let component: LessonsCreationComponent;
  let fixture: ComponentFixture<LessonsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
