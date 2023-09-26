import { TestBed } from '@angular/core/testing';
import { AbourUsService } from './about-us.service';

describe('AbourUsService', () => {
  let service: AbourUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbourUsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
