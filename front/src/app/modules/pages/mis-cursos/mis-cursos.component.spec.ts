import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCursosComponent } from './mis-cursos.component';

describe('MisCursosComponent', () => {
  let component: MisCursosComponent;
  let fixture: ComponentFixture<MisCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
