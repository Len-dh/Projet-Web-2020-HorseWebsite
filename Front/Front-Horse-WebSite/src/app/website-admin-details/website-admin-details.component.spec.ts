import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteAdminDetailsComponent } from './website-admin-details.component';

describe('WebsiteAdminDetailsComponent', () => {
  let component: WebsiteAdminDetailsComponent;
  let fixture: ComponentFixture<WebsiteAdminDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteAdminDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteAdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
