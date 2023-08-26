import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesComponent } from './bases.component';

describe('BasesComponent', () => {
  let component: BasesComponent;
  let fixture: ComponentFixture<BasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
