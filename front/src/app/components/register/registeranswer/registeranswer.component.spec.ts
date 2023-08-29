import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteranswerComponent } from './registeranswer.component';

describe('RegisteranswerComponent', () => {
  let component: RegisteranswerComponent;
  let fixture: ComponentFixture<RegisteranswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteranswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteranswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
