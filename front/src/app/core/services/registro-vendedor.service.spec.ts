import { TestBed } from '@angular/core/testing';

import { RegistroVendedorService } from './registro-vendedor.service';

describe('RegistroVendedorService', () => {
  let service: RegistroVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
