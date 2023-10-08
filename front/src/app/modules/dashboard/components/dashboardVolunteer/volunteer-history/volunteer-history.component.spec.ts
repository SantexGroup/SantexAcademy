import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerHistoryComponent } from './volunteer-history.component';

describe('VolunteerHistoryComponent', () => {
  let component: VolunteerHistoryComponent;
  let fixture: ComponentFixture<VolunteerHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerHistoryComponent]
    });
    fixture = TestBed.createComponent(VolunteerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
