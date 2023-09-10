import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockUnsuccessfullyComponent } from './mock-unsuccessfully.component';

describe('MockUnsuccessfullyComponent', () => {
  let component: MockUnsuccessfullyComponent;
  let fixture: ComponentFixture<MockUnsuccessfullyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockUnsuccessfullyComponent]
    });
    fixture = TestBed.createComponent(MockUnsuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
