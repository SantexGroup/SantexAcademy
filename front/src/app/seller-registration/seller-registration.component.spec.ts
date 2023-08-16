import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRegistrationComponent } from './seller-registration.component';

describe('SellerRegistrationComponent', () => {
  let component: SellerRegistrationComponent;
  let fixture: ComponentFixture<SellerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
