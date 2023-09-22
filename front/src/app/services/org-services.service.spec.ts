import { TestBed } from '@angular/core/testing';

import { OrgServicesService } from './org-services.service';

describe('OrgServicesService', () => {
  let service: OrgServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
