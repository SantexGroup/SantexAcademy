import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAplicationComponent } from './modal-aplication.component';

describe('ModalAplicationComponent', () => {
  let component: ModalAplicationComponent;
  let fixture: ComponentFixture<ModalAplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAplicationComponent]
    });
    fixture = TestBed.createComponent(ModalAplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
