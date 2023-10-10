import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonNavegacionComponent } from './boton-navegacion.component';

describe('BotonNavegacionComponent', () => {
  let component: BotonNavegacionComponent;
  let fixture: ComponentFixture<BotonNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonNavegacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
