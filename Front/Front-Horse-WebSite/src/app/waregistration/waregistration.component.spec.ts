import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaregistrationComponent } from './waregistration.component';

describe('WaregistrationComponent', () => {
  let component: WaregistrationComponent;
  let fixture: ComponentFixture<WaregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
