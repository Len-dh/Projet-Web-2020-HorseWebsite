import { TestBed } from '@angular/core/testing';

import { HorseInstructorService } from './horse-instructor.service';

describe('HorseInstructorService', () => {
  let service: HorseInstructorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorseInstructorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
