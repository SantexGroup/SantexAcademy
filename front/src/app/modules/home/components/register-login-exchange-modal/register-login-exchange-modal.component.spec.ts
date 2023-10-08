import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLoginExchangeModalComponent } from './register-login-exchange-modal.component';

describe('RegisterLoginExchangeModalComponent', () => {
  let component: RegisterLoginExchangeModalComponent;
  let fixture: ComponentFixture<RegisterLoginExchangeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterLoginExchangeModalComponent]
    });
    fixture = TestBed.createComponent(RegisterLoginExchangeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
