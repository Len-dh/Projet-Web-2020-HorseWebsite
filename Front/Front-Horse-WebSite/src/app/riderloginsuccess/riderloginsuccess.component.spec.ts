import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderloginsuccessComponent } from './riderloginsuccess.component';

describe('RiderloginsuccessComponent', () => {
  let component: RiderloginsuccessComponent;
  let fixture: ComponentFixture<RiderloginsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderloginsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderloginsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
