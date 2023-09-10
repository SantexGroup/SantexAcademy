import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockSuccessComponent } from './mock-success.component';

describe('MockSuccessComponent', () => {
  let component: MockSuccessComponent;
  let fixture: ComponentFixture<MockSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockSuccessComponent]
    });
    fixture = TestBed.createComponent(MockSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
