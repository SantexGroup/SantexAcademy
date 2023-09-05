import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCoordinatorsRegisterComponent } from './form-coordinators-register.component';

describe('FormCoordinatorsRegisterComponent', () => {
  let component: FormCoordinatorsRegisterComponent;
  let fixture: ComponentFixture<FormCoordinatorsRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCoordinatorsRegisterComponent]
    });
    fixture = TestBed.createComponent(FormCoordinatorsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
