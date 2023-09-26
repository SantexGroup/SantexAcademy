import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOptionsLoginComponent } from './modal-options-login.component';

describe('ModalOptionsLoginComponent', () => {
  let component: ModalOptionsLoginComponent;
  let fixture: ComponentFixture<ModalOptionsLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalOptionsLoginComponent]
    });
    fixture = TestBed.createComponent(ModalOptionsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
