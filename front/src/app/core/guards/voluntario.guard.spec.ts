import { TestBed } from '@angular/core/testing';

import { VoluntarioGuard } from './voluntario.guard';

describe('VoluntarioGuard', () => {
  let guard: VoluntarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VoluntarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
