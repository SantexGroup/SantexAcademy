import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAgendahoursComponent } from './cards-agendahours.component';

describe('CardsAgendahoursComponent', () => {
  let component: CardsAgendahoursComponent;
  let fixture: ComponentFixture<CardsAgendahoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsAgendahoursComponent]
    });
    fixture = TestBed.createComponent(CardsAgendahoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
