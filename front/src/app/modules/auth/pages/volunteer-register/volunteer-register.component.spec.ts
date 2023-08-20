import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerRegisterComponent } from './volunteer-register.component';

describe('VolunteerRegisterComponent', () => {
  let component: VolunteerRegisterComponent;
  let fixture: ComponentFixture<VolunteerRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerRegisterComponent]
    });
    fixture = TestBed.createComponent(VolunteerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
