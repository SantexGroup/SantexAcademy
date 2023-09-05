import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorRegisterComponent } from './coordinator-register.component';

describe('CoordinatorRegisterComponent', () => {
  let component: CoordinatorRegisterComponent;
  let fixture: ComponentFixture<CoordinatorRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorRegisterComponent]
    });
    fixture = TestBed.createComponent(CoordinatorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
