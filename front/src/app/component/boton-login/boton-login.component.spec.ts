import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLoginComponent } from './boton-login.component';

describe('BotonLoginComponent', () => {
  let component: BotonLoginComponent;
  let fixture: ComponentFixture<BotonLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BotonLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
