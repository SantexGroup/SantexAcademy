import { TestBed } from '@angular/core/testing';

import { RazaService } from './raza.service';

describe('RazaService', () => {
  let service: RazaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RazaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
