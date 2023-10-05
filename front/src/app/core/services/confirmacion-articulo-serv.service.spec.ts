import { TestBed } from '@angular/core/testing';

import { ConfirmacionArticuloServService } from './confirmacion-articulo-serv.service';

describe('ConfirmacionArticuloServService', () => {
  let service: ConfirmacionArticuloServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmacionArticuloServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
