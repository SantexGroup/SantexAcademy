import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarTareaModalComponent } from './crear-modificar-tarea-modal.component';

describe('CrearTareaModificarModalComponent', () => {
  let component: CrearModificarTareaModalComponent;
  let fixture: ComponentFixture<CrearModificarTareaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearModificarTareaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearModificarTareaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
