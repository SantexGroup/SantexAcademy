import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAfterApplicationComponent } from './modal-after-application.component';

describe('ModalAfterApplicationComponent', () => {
  let component: ModalAfterApplicationComponent;
  let fixture: ComponentFixture<ModalAfterApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAfterApplicationComponent]
    });
    fixture = TestBed.createComponent(ModalAfterApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
