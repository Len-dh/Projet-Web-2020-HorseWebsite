import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderregistrationComponent } from './riderregistration.component';

describe('RiderregistrationComponent', () => {
  let component: RiderregistrationComponent;
  let fixture: ComponentFixture<RiderregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
