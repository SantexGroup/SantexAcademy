import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCodeComponent } from './create-new-code.component';

describe('CreateNewCodeComponent', () => {
  let component: CreateNewCodeComponent;
  let fixture: ComponentFixture<CreateNewCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
