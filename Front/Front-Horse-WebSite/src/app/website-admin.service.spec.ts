import { TestBed } from '@angular/core/testing';

import { WebsiteAdminService } from './website-admin.service';

describe('WebsiteAdminService', () => {
  let service: WebsiteAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
