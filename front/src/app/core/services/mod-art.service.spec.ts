import { TestBed } from '@angular/core/testing';

import { ModArtService } from './mod-art.service';

describe('ModArtService', () => {
  let service: ModArtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModArtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
