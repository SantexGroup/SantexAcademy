import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOrganizationsComponent } from './slider-organizations.component';

describe('SliderOrganizationsComponent', () => {
  let component: SliderOrganizationsComponent;
  let fixture: ComponentFixture<SliderOrganizationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderOrganizationsComponent]
    });
    fixture = TestBed.createComponent(SliderOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
