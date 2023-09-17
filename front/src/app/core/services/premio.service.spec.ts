import { TestBed } from '@angular/core/testing';

import { PremioService } from './premio.service';

describe('PremioService', () => {
  let service: PremioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
