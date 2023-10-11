import { TestBed } from '@angular/core/testing';

import { EditarUsuarioService } from './editar-usuario.service';

describe('EditarUsuarioService', () => {
  let service: EditarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
