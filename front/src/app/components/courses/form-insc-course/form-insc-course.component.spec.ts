import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInscCourseComponent } from './form-insc-course.component';

describe('FormInscCourseComponent', () => {
  let component: FormInscCourseComponent;
  let fixture: ComponentFixture<FormInscCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInscCourseComponent]
    });
    fixture = TestBed.createComponent(FormInscCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
