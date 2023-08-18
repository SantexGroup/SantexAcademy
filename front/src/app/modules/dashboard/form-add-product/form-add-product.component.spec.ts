import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddProductComponent } from './form-add-product.component';

describe('FormAddProductComponent', () => {
  let component: FormAddProductComponent;
  let fixture: ComponentFixture<FormAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
