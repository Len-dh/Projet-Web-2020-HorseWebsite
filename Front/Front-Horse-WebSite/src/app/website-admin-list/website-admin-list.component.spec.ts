import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteAdminListComponent } from './website-admin-list.component';

describe('WebsiteAdminListComponent', () => {
  let component: WebsiteAdminListComponent;
  let fixture: ComponentFixture<WebsiteAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteAdminListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
