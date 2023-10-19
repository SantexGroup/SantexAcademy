import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProfesorComponent } from './formulario-profesor.component';

describe('FormularioProfesorComponent', () => {
  let component: FormularioProfesorComponent;
  let fixture: ComponentFixture<FormularioProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioProfesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
