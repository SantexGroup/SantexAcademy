import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStatusComponent } from './modal-status.component';

describe('ModalStatusComponent', () => {
  let component: ModalStatusComponent;
  let fixture: ComponentFixture<ModalStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalStatusComponent]
    });
    fixture = TestBed.createComponent(ModalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
