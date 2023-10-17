import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialContratacionesComponent } from './historial-contrataciones';

describe('HistorialVentasParaCompradorComponent', () => {
  let component: HistorialContratacionesComponent;
  let fixture: ComponentFixture<HistorialContratacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialContratacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialContratacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
