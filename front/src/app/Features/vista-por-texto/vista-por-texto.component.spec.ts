import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPorTextoComponent } from './vista-por-texto.component';

describe('VistaPorTextoComponent', () => {
  let component: VistaPorTextoComponent;
  let fixture: ComponentFixture<VistaPorTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPorTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPorTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
