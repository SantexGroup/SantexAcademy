import { TestBed } from '@angular/core/testing';

import { CourseServiceService } from './course-service.service';

describe('CourseServiceService', () => {
  let service: CourseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
