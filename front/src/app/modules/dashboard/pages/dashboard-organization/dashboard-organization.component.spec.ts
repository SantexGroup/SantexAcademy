import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationComponent } from './dashboard-organization.component';

describe('DashboardOrganizationComponent', () => {
  let component: DashboardOrganizationComponent;
  let fixture: ComponentFixture<DashboardOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
