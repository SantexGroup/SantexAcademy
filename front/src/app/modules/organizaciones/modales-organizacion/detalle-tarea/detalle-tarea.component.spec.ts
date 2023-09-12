import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTareaComponent } from './detalle-tarea.component';

describe('DetalleTareaComponent', () => {
  let component: DetalleTareaComponent;
  let fixture: ComponentFixture<DetalleTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
