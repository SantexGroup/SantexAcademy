import { TestBed } from '@angular/core/testing';

import { HisContService } from './his-cont.service';

describe('HisContService', () => {
  let service: HisContService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HisContService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
