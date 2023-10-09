import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariosComponent } from './voluntarios.component';

describe('VoluntariosComponent', () => {
  let component: VoluntariosComponent;
  let fixture: ComponentFixture<VoluntariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoluntariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoluntariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
