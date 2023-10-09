import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCourseComponent } from './description-course.component';

describe('DescriptionCourseComponent', () => {
  let component: DescriptionCourseComponent;
  let fixture: ComponentFixture<DescriptionCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
