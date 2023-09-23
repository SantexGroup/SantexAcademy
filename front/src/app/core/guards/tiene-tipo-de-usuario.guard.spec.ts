import { TestBed } from '@angular/core/testing';

import { TieneTipoDeUsuarioGuard } from './tiene-tipo-de-usuario.guard';

describe('TieneTipoDeUsuarioGuard', () => {
  let guard: TieneTipoDeUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TieneTipoDeUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
