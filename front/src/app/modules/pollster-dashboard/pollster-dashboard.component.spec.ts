import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsterDashboardComponent } from './pollster-dashboard.component';

describe('PollsterDashboardComponent', () => {
  let component: PollsterDashboardComponent;
  let fixture: ComponentFixture<PollsterDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PollsterDashboardComponent]
    });
    fixture = TestBed.createComponent(PollsterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
