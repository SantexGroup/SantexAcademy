import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsComponent } from './formations.component';

describe('FormationsComponent', () => {
  let component: FormationsComponent;
  let fixture: ComponentFixture<FormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
