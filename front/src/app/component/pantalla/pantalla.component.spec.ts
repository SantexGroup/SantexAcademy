import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaComponent } from './pantalla.component';

describe('PantallaComponent', () => {
  let component: PantallaComponent;
  let fixture: ComponentFixture<PantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PantallaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
