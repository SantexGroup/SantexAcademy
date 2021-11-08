import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDogComponent } from "./CreateDogComponent";

describe('CreateDogComponent', () => {
  let component: CreateDogComponent;
  let fixture: ComponentFixture<CreateDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
