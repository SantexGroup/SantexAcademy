import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoComponent } from './curso.component';

describe('CursoComponent', () => {
  let component: CursoComponent;
  let fixture: ComponentFixture<CursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
