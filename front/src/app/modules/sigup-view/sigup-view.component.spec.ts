import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigupViewComponent } from './sigup-view.component';

describe('SigupViewComponent', () => {
  let component: SigupViewComponent;
  let fixture: ComponentFixture<SigupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigupViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
