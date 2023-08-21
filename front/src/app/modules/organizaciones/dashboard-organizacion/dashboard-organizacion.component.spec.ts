import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizacionComponent } from './dashboard-organizacion.component';

describe('DashboardOrganizacionComponent', () => {
  let component: DashboardOrganizacionComponent;
  let fixture: ComponentFixture<DashboardOrganizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOrganizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
