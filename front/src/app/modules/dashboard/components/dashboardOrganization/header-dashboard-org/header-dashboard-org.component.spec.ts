import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDashboardOrgComponent } from './header-dashboard-org.component';

describe('HeaderDashboardOrgComponent', () => {
  let component: HeaderDashboardOrgComponent;
  let fixture: ComponentFixture<HeaderDashboardOrgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDashboardOrgComponent]
    });
    fixture = TestBed.createComponent(HeaderDashboardOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
