import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminregistrationComponent } from './adminregistration.component';

describe('AdminregistrationComponent', () => {
  let component: AdminregistrationComponent;
  let fixture: ComponentFixture<AdminregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
