import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTareasComponent } from './listado-tareas.component';

describe('ListadoTareasComponent', () => {
  let component: ListadoTareasComponent;
  let fixture: ComponentFixture<ListadoTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
