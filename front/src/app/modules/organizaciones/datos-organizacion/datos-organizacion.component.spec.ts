import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosOrganizacionComponent } from './datos-organizacion.component';

describe('DatosOrganizacionComponent', () => {
  let component: DatosOrganizacionComponent;
  let fixture: ComponentFixture<DatosOrganizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosOrganizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
