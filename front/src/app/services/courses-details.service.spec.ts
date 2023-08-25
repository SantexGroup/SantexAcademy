import { TestBed } from '@angular/core/testing';

import { CoursesDetailsService } from './courses-details.service';

describe('CoursesDetailsService', () => {
  let service: CoursesDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
