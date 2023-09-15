import { TestBed } from '@angular/core/testing';

import { ValidarTokenGuard } from './validar-token.guard';

describe('ValidarTokenGuard', () => {
  let guard: ValidarTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
