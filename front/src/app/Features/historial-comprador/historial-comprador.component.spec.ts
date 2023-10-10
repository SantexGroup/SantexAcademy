import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialCompradorComponent } from './historial-comprador.component';

describe('HistorialCompradorComponent', () => {
  let component: HistorialCompradorComponent;
  let fixture: ComponentFixture<HistorialCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialCompradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
