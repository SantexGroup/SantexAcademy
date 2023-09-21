import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesFourComponent } from './profiles-four.component';

describe('ProfilesFourComponent', () => {
  let component: ProfilesFourComponent;
  let fixture: ComponentFixture<ProfilesFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
