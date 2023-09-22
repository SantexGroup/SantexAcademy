import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaArticuloIndComponent } from './vista-articulo-ind.component';

describe('VistaArticuloIndComponent', () => {
  let component: VistaArticuloIndComponent;
  let fixture: ComponentFixture<VistaArticuloIndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaArticuloIndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaArticuloIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
