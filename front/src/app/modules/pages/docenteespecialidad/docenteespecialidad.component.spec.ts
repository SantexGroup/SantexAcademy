import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteespecialidadComponent } from './docenteespecialidad.component';

describe('DocenteespecialidadComponent', () => {
  let component: DocenteespecialidadComponent;
  let fixture: ComponentFixture<DocenteespecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteespecialidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
