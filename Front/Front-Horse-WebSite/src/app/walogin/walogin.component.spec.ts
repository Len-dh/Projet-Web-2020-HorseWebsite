import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaloginComponent } from './walogin.component';

describe('WaloginComponent', () => {
  let component: WaloginComponent;
  let fixture: ComponentFixture<WaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
