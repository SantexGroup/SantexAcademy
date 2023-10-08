import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsRegisterComponent } from './options-register.component';

describe('OptionsRegisterComponent', () => {
  let component: OptionsRegisterComponent;
  let fixture: ComponentFixture<OptionsRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsRegisterComponent]
    });
    fixture = TestBed.createComponent(OptionsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
