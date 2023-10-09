import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAboutUsComponent } from './show-about-us.component';

describe('ShowAboutUsComponent', () => {
  let component: ShowAboutUsComponent;
  let fixture: ComponentFixture<ShowAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
