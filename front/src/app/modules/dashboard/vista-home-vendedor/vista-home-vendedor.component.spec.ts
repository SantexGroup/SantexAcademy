import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaHomeVendedorComponent } from './vista-home-vendedor.component';

describe('VistaHomeVendedorComponent', () => {
  let component: VistaHomeVendedorComponent;
  let fixture: ComponentFixture<VistaHomeVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaHomeVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaHomeVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
