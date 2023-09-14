import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRegistroComponent } from './formulario-registro.component';

describe('FormularioRegistroComponent', () => {
  let component: FormularioRegistroComponent;
  let fixture: ComponentFixture<FormularioRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
