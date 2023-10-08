import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerFiltersComponent } from './volunteer-filters.component';

describe('VolunteerFiltersComponent', () => {
  let component: VolunteerFiltersComponent;
  let fixture: ComponentFixture<VolunteerFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerFiltersComponent]
    });
    fixture = TestBed.createComponent(VolunteerFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
