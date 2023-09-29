import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedVolunteeringComponent } from './completed-volunteering.component';

describe('CompletedVolunteeringComponent', () => {
  let component: CompletedVolunteeringComponent;
  let fixture: ComponentFixture<CompletedVolunteeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedVolunteeringComponent]
    });
    fixture = TestBed.createComponent(CompletedVolunteeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
