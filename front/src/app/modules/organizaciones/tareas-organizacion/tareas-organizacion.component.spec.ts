import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasOrganizacionComponent } from './tareas-organizacion.component';

describe('TareasOrganizacionComponent', () => {
  let component: TareasOrganizacionComponent;
  let fixture: ComponentFixture<TareasOrganizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasOrganizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
