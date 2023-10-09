import { TestBed } from '@angular/core/testing';

import { StudentGuard } from './student.guard';

describe('StudentGuard', () => {
  let guard: StudentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
