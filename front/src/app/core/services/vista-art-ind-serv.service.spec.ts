import { TestBed } from '@angular/core/testing';

import { VistaArtIndServService } from './vista-art-ind-serv.service';

describe('VistaArtIndServService', () => {
  let service: VistaArtIndServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaArtIndServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
