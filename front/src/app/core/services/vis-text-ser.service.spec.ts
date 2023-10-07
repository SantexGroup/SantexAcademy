import { TestBed } from '@angular/core/testing';

import { VisTextSerService } from './vis-text-ser.service';

describe('VisTextSerService', () => {
  let service: VisTextSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisTextSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
