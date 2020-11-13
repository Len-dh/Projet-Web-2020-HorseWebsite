import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsesListComponent } from './horses-list.component';

describe('HorsesListComponent', () => {
  let component: HorsesListComponent;
  let fixture: ComponentFixture<HorsesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorsesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
