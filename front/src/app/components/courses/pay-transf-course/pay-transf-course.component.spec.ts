import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTransfCourseComponent } from './pay-transf-course.component';

describe('PayTransfCourseComponent', () => {
  let component: PayTransfCourseComponent;
  let fixture: ComponentFixture<PayTransfCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayTransfCourseComponent]
    });
    fixture = TestBed.createComponent(PayTransfCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
