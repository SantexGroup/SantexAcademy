import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnonotaComponent } from './alumnonota.component';

describe('AlumnonotaComponent', () => {
  let component: AlumnonotaComponent;
  let fixture: ComponentFixture<AlumnonotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnonotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnonotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
