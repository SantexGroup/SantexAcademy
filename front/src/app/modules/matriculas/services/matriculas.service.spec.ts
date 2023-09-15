import { TestBed } from '@angular/core/testing';

import { MatriculasService } from './matriculas.service';

describe('MatriculasService', () => {
  let service: MatriculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatriculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
