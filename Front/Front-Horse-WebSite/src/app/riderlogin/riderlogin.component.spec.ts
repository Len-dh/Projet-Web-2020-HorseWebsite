import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderloginComponent } from './riderlogin.component';

describe('RiderloginComponent', () => {
  let component: RiderloginComponent;
  let fixture: ComponentFixture<RiderloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
