import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoasistenciaComponent } from './alumnoasistencia.component';

describe('AlumnoasistenciaComponent', () => {
  let component: AlumnoasistenciaComponent;
  let fixture: ComponentFixture<AlumnoasistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoasistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
