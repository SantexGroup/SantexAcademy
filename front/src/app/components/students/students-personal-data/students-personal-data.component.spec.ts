import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPersonalDataComponent } from './students-personal-data.component';

describe('StudentsPersonalDataComponent', () => {
  let component: StudentsPersonalDataComponent;
  let fixture: ComponentFixture<StudentsPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsPersonalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
