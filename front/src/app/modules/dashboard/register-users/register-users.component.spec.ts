import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUsersComponent } from './register-users.component';

describe('RegisterUsersComponent', () => {
  let component: RegisterUsersComponent;
  let fixture: ComponentFixture<RegisterUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
