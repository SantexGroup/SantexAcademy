import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsComponent } from './inscriptions.component';

describe('InscriptionsComponent', () => {
  let component: InscriptionsComponent;
  let fixture: ComponentFixture<InscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
