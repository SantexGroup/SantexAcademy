import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTareaModalComponent } from './crear-tarea-modal.component';

describe('CrearTareaModalComponent', () => {
  let component: CrearTareaModalComponent;
  let fixture: ComponentFixture<CrearTareaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTareaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTareaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
