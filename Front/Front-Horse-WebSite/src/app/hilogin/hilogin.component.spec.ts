import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiloginComponent } from './hilogin.component';

describe('HiloginComponent', () => {
  let component: HiloginComponent;
  let fixture: ComponentFixture<HiloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
