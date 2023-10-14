import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOneComponent } from './profile-one.component';

describe('ProfileOneComponent', () => {
  let component: ProfileOneComponent;
  let fixture: ComponentFixture<ProfileOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
