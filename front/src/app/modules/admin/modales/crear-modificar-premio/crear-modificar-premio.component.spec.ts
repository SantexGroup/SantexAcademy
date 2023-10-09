import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModificarPremioComponent } from './crear-modificar-premio.component';

describe('CrearModificarPremioComponent', () => {
  let component: CrearModificarPremioComponent;
  let fixture: ComponentFixture<CrearModificarPremioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearModificarPremioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearModificarPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
