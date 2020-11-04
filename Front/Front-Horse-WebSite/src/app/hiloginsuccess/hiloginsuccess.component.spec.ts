import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiloginsuccessComponent } from './hiloginsuccess.component';

describe('HiloginsuccessComponent', () => {
  let component: HiloginsuccessComponent;
  let fixture: ComponentFixture<HiloginsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiloginsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiloginsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
