import { TestBed } from '@angular/core/testing';

import { CourseCategoryService } from './course-category.service';

describe('CourseCategoryService', () => {
  let service: CourseCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
