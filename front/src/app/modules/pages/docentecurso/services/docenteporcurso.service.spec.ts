import { TestBed } from '@angular/core/testing';

import { DocenteporcursoService } from './docenteporcurso.service';

describe('DocenteporcursoService', () => {
  let service: DocenteporcursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocenteporcursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
