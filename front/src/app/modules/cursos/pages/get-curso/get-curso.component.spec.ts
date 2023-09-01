import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCursoComponent } from './get-curso.component';

describe('GetCursoComponent', () => {
  let component: GetCursoComponent;
  let fixture: ComponentFixture<GetCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
