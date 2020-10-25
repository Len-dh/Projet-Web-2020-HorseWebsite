import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminHomepageComponent } from './super-admin-homepage.component';

describe('SuperAdminHomepageComponent', () => {
  let component: SuperAdminHomepageComponent;
  let fixture: ComponentFixture<SuperAdminHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
