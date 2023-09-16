import { TestBed } from '@angular/core/testing';

import { CargaArticulosService } from './carga-articulos.service';

describe('CargaArticulosService', () => {
  let service: CargaArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
