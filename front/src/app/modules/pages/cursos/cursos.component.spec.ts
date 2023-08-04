import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosComponent } from './cursos.component';

describe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
