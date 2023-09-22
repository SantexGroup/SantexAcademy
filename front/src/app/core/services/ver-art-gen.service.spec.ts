import { TestBed } from '@angular/core/testing';

import { VerArtGenService } from './ver-art-gen.service';

describe('VerArtGenService', () => {
  let service: VerArtGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerArtGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
