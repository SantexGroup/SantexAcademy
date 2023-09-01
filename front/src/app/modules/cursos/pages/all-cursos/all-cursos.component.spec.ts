import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCursosComponent } from './all-cursos.component';

describe('AllCursosComponent', () => {
  let component: AllCursosComponent;
  let fixture: ComponentFixture<AllCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
