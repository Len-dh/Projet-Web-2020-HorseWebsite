import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaloginsuccessComponent } from './waloginsuccess.component';

describe('WaloginsuccessComponent', () => {
  let component: WaloginsuccessComponent;
  let fixture: ComponentFixture<WaloginsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaloginsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaloginsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
