import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarArticuloComponent } from './modificar-articulo.component';

describe('ModificarArticuloComponent', () => {
  let component: ModificarArticuloComponent;
  let fixture: ComponentFixture<ModificarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
