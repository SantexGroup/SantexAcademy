import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOptionregisterComponent } from './card-optionregister.component';

describe('CardOptionregisterComponent', () => {
  let component: CardOptionregisterComponent;
  let fixture: ComponentFixture<CardOptionregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOptionregisterComponent]
    });
    fixture = TestBed.createComponent(CardOptionregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
