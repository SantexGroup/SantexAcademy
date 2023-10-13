import { TestBed } from '@angular/core/testing';

import { ServiceRegService } from './service-reg.service';

describe('ServiceRegService', () => {
  let service: ServiceRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
