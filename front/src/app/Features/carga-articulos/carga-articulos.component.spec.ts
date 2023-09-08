import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaArticulosComponent } from './carga-articulos.component';

describe('CargaArticulosComponent', () => {
  let component: CargaArticulosComponent;
  let fixture: ComponentFixture<CargaArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaArticulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
