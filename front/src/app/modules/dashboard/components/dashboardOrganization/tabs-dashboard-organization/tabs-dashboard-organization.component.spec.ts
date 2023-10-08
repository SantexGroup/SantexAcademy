import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDashboardOrganizationComponent } from './tabs-dashboard-organization.component';

describe('TabsDashboardOrganizationComponent', () => {
  let component: TabsDashboardOrganizationComponent;
  let fixture: ComponentFixture<TabsDashboardOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsDashboardOrganizationComponent]
    });
    fixture = TestBed.createComponent(TabsDashboardOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
