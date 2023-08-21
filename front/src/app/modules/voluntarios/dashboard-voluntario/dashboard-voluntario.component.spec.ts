import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVoluntarioComponent } from './dashboard-voluntario.component';

describe('DashboardVoluntarioComponent', () => {
  let component: DashboardVoluntarioComponent;
  let fixture: ComponentFixture<DashboardVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVoluntarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
