import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStatusFormComponent } from './modal-status-form.component';

describe('ModalStatusFormComponent', () => {
  let component: ModalStatusFormComponent;
  let fixture: ComponentFixture<ModalStatusFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalStatusFormComponent]
    });
    fixture = TestBed.createComponent(ModalStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
