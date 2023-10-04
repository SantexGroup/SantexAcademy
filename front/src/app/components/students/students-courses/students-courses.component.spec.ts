import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCoursesComponent } from './students-courses.component';

describe('StudentsCoursesComponent', () => {
  let component: StudentsCoursesComponent;
  let fixture: ComponentFixture<StudentsCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
