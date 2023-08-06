import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOrganizacionComponent } from './registro-organizacion.component';

describe('RegistroOrganizacionComponent', () => {
  let component: RegistroOrganizacionComponent;
  let fixture: ComponentFixture<RegistroOrganizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroOrganizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
