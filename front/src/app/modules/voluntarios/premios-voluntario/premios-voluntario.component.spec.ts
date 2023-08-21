import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiosVoluntarioComponent } from './premios-voluntario.component';

describe('PremiosVoluntarioComponent', () => {
  let component: PremiosVoluntarioComponent;
  let fixture: ComponentFixture<PremiosVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiosVoluntarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiosVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
