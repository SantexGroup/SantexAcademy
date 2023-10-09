import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAboutUsComponent } from './add-about-us.component';

describe('AddAboutUsComponent', () => {
  let component: AddAboutUsComponent;
  let fixture: ComponentFixture<AddAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
