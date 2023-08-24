import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeleteComponent } from './form-delete.component';

describe('FormDeleteComponent', () => {
  let component: FormDeleteComponent;
  let fixture: ComponentFixture<FormDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
