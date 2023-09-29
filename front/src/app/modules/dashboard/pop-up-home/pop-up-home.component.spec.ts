import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpHomeComponent } from './pop-up-home.component';

describe('PopUpHomeComponent', () => {
  let component: PopUpHomeComponent;
  let fixture: ComponentFixture<PopUpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
