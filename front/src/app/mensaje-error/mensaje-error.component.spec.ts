import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeErrorComponent } from './mensaje-error.component';

describe('MensajeErrorComponent', () => {
  let component: MensajeErrorComponent;
  let fixture: ComponentFixture<MensajeErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
