import { TestBed } from '@angular/core/testing';
import { AboutUsService } from './about-us.service';

describe('AboutUsService', () => {
  let service: AboutUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutUsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
