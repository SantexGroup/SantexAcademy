import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosVoluntarioComponent } from './datos-voluntario.component';

describe('DatosVoluntarioComponent', () => {
  let component: DatosVoluntarioComponent;
  let fixture: ComponentFixture<DatosVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosVoluntarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
