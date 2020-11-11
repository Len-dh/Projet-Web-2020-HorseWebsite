import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsesCreationComponent } from './horses-creation.component';

describe('HorsesCreationComponent', () => {
  let component: HorsesCreationComponent;
  let fixture: ComponentFixture<HorsesCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorsesCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
