import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('El servicio se creo correctamente', () => {
    const service: ApiService = TestBed.inject(ApiService);
    expect(service).toBeTruthy();
  });
});
