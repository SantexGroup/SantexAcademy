import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVolunteerregisterComponent } from './form-volunteerregister.component';

describe('FormVolunteerregisterComponent', () => {
  let component: FormVolunteerregisterComponent;
  let fixture: ComponentFixture<FormVolunteerregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormVolunteerregisterComponent]
    });
    fixture = TestBed.createComponent(FormVolunteerregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
