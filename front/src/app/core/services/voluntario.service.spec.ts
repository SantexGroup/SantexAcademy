import { TestBed } from '@angular/core/testing';

import { VoluntarioService } from './voluntario.service';

describe('VoluntarioService', () => {
  let service: VoluntarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoluntarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
