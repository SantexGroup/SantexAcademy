import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariosInscriptosComponent } from './voluntarios-inscriptos.component';

describe('VoluntariosInscriptosComponent', () => {
  let component: VoluntariosInscriptosComponent;
  let fixture: ComponentFixture<VoluntariosInscriptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoluntariosInscriptosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoluntariosInscriptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
