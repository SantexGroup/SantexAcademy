import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAlumnoComponent } from './perfil-alumno.component';

describe('PerfilAlumnoComponent', () => {
  let component: PerfilAlumnoComponent;
  let fixture: ComponentFixture<PerfilAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
