import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina404Component } from './pagina404.component';

describe('Pagina404Component', () => {
  let component: Pagina404Component;
  let fixture: ComponentFixture<Pagina404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina404Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
