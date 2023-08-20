import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsregisterPageComponent } from './optionsregister-page.component';

describe('OptionsregisterPageComponent', () => {
  let component: OptionsregisterPageComponent;
  let fixture: ComponentFixture<OptionsregisterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsregisterPageComponent]
    });
    fixture = TestBed.createComponent(OptionsregisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
