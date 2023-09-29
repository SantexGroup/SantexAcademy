import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUsuarioPerfilComponent } from './vista-usuario-perfil.component';

describe('VistaUsuarioPerfilComponent', () => {
  let component: VistaUsuarioPerfilComponent;
  let fixture: ComponentFixture<VistaUsuarioPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaUsuarioPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaUsuarioPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
