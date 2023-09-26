import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionCompraComponent } from './confirmacion-compra.component';

describe('ConfirmacionCompraComponent', () => {
  let component: ConfirmacionCompraComponent;
  let fixture: ComponentFixture<ConfirmacionCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
