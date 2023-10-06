import { TestBed } from '@angular/core/testing';

import { HisVenService } from './his-ven.service';

describe('HisVenService', () => {
  let service: HisVenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HisVenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
