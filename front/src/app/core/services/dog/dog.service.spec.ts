/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DogService } from './dog.service';

describe('Service: Dog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogService]
    });
  });

  it('should ...', inject([DogService], (service: DogService) => {
    expect(service).toBeTruthy();
  }));
});
