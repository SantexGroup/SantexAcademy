import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterverificationComponent } from './registerverification.component';

describe('RegisterverificationComponent', () => {
  let component: RegisterverificationComponent;
  let fixture: ComponentFixture<RegisterverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterverificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
