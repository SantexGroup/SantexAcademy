import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVolunteerComponent } from './data-volunteer.component';

describe('DataVolunteerComponent', () => {
  let component: DataVolunteerComponent;
  let fixture: ComponentFixture<DataVolunteerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataVolunteerComponent]
    });
    fixture = TestBed.createComponent(DataVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
