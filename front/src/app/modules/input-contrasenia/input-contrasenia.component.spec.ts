import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputContraseniaComponent } from './input-contrasenia.component';

describe('InputContraseniaComponent', () => {
  let component: InputContraseniaComponent;
  let fixture: ComponentFixture<InputContraseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputContraseniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
