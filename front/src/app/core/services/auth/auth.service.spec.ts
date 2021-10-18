import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


beforeEach(() => {

  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: []
  });
});

it('Deberia crear el servicio', () => {
  const service: AuthService = TestBed.inject(AuthService);
  expect(service).toBeTruthy();
});
