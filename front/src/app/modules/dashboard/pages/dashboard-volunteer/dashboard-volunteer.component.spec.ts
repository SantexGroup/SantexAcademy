import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVolunteerComponent } from './dashboard-volunteer.component';

describe('DashboardVolunteerComponent', () => {
  let component: DashboardVolunteerComponent;
  let fixture: ComponentFixture<DashboardVolunteerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardVolunteerComponent]
    });
    fixture = TestBed.createComponent(DashboardVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
