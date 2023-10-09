import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionesComponent } from './organizaciones.component';

describe('OrganizacionesComponent', () => {
  let component: OrganizacionesComponent;
  let fixture: ComponentFixture<OrganizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
