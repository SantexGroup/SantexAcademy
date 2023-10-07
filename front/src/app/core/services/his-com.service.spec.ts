import { TestBed } from '@angular/core/testing';

import { HisComService } from './his-com.service';

describe('HisComService', () => {
  let service: HisComService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HisComService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
