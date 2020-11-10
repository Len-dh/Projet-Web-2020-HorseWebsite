import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiregistrationComponent } from './hiregistration.component';

describe('HiregistrationComponent', () => {
  let component: HiregistrationComponent;
  let fixture: ComponentFixture<HiregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
