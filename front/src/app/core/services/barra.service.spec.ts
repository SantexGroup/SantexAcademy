import { TestBed } from '@angular/core/testing';

import { BarraService } from './barra.service';

describe('BarraService', () => {
  let service: BarraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
