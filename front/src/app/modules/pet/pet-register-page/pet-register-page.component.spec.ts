import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetRegisterPageComponent } from './pet-register-page.component';

describe('PetRegisterPageComponent', () => {
  let component: PetRegisterPageComponent;
  let fixture: ComponentFixture<PetRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetRegisterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
