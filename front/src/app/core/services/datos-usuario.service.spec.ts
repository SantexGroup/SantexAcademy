import { TestBed } from '@angular/core/testing';

import { DatosUsuarioService } from './datos-usuario.service';

describe('DatosUsuarioService', () => {
  let service: DatosUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
