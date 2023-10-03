import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderExchangeComponent } from './slider-exchange.component';

describe('SliderExchangeComponent', () => {
  let component: SliderExchangeComponent;
  let fixture: ComponentFixture<SliderExchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderExchangeComponent]
    });
    fixture = TestBed.createComponent(SliderExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
