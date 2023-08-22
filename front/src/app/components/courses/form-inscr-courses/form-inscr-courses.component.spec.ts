import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInscrCoursesComponent } from './form-inscr-courses.component';

describe('FormInscrCoursesComponent', () => {
  let component: FormInscrCoursesComponent;
  let fixture: ComponentFixture<FormInscrCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInscrCoursesComponent]
    });
    fixture = TestBed.createComponent(FormInscrCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
