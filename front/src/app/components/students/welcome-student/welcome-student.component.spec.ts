import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeStudentComponent } from './welcome-student.component';

describe('WelcomeStudentComponent', () => {
  let component: WelcomeStudentComponent;
  let fixture: ComponentFixture<WelcomeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
