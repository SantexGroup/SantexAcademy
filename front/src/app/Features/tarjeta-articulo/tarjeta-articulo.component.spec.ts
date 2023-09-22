import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaArticuloComponent } from './tarjeta-articulo.component';

describe('TarjetaArticuloComponent', () => {
  let component: TarjetaArticuloComponent;
  let fixture: ComponentFixture<TarjetaArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
