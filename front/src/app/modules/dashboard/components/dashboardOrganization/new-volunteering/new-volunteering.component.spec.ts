import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVolunteeringComponent } from './new-volunteering.component';

describe('NewVolunteeringComponent', () => {
  let component: NewVolunteeringComponent;
  let fixture: ComponentFixture<NewVolunteeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewVolunteeringComponent]
    });
    fixture = TestBed.createComponent(NewVolunteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
