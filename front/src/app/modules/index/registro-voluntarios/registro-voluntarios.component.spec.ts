import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVoluntariosComponent } from './registro-voluntarios.component';

describe('RegistroVoluntariosComponent', () => {
  let component: RegistroVoluntariosComponent;
  let fixture: ComponentFixture<RegistroVoluntariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVoluntariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVoluntariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
