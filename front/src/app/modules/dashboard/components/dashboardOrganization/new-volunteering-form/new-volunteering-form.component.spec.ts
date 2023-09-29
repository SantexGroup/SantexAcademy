import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVolunteeringFormComponent } from './new-volunteering-form.component';

describe('NewVolunteeringFormComponent', () => {
  let component: NewVolunteeringFormComponent;
  let fixture: ComponentFixture<NewVolunteeringFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewVolunteeringFormComponent]
    });
    fixture = TestBed.createComponent(NewVolunteeringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
