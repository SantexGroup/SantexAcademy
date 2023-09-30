import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDocenteComponent } from './perfil-docente.component';

describe('PerfilDocenteComponent', () => {
  let component: PerfilDocenteComponent;
  let fixture: ComponentFixture<PerfilDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
