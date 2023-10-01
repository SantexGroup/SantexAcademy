import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentecursoComponent } from './docentecurso.component';

describe('DocentecursoComponent', () => {
  let component: DocentecursoComponent;
  let fixture: ComponentFixture<DocentecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocentecursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
