import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsToVolunteerComponent } from './steps-to-volunteer.component';

describe('StepsToVolunteerComponent', () => {
  let component: StepsToVolunteerComponent;
  let fixture: ComponentFixture<StepsToVolunteerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepsToVolunteerComponent]
    });
    fixture = TestBed.createComponent(StepsToVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
