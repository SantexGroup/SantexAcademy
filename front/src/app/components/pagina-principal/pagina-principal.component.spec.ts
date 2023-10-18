import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalComponent } from './pagina-principal.component';

describe('PaginaPrincipalComponent', () => {
  let component: PaginaPrincipalComponent;
  let fixture: ComponentFixture<PaginaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPrincipalComponent]
    });
    fixture = TestBed.createComponent(PaginaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
