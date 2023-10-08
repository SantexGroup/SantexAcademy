import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerCardComponent } from './volunteer-card.component';

describe('VolunteerCardComponent', () => {
  let component: VolunteerCardComponent;
  let fixture: ComponentFixture<VolunteerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerCardComponent]
    });
    fixture = TestBed.createComponent(VolunteerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
