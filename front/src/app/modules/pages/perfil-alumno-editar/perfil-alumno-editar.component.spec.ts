import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAlumnoEditarComponent } from './perfil-alumno-editar.component';

describe('PerfilAlumnoEditarComponent', () => {
  let component: PerfilAlumnoEditarComponent;
  let fixture: ComponentFixture<PerfilAlumnoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAlumnoEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAlumnoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
