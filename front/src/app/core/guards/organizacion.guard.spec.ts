import { TestBed } from '@angular/core/testing';

import { OrganizacionGuard } from './organizacion.guard';

describe('OrganizacionGuard', () => {
  let guard: OrganizacionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OrganizacionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
