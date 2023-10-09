import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasVoluntarioComponent } from './tareas-voluntario.component';

describe('TareasVoluntarioComponent', () => {
  let component: TareasVoluntarioComponent;
  let fixture: ComponentFixture<TareasVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasVoluntarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
