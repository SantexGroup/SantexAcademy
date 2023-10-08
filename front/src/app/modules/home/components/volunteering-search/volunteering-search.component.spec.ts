import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringSearchComponent } from './volunteering-search.component';

describe('VolunteeringSearchComponent', () => {
  let component: VolunteeringSearchComponent;
  let fixture: ComponentFixture<VolunteeringSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteeringSearchComponent]
    });
    fixture = TestBed.createComponent(VolunteeringSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
