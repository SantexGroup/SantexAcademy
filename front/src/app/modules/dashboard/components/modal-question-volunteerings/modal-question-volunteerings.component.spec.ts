import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuestionVolunteeringsComponent } from './modal-question-volunteerings.component';

describe('ModalQuestionVolunteeringsComponent', () => {
  let component: ModalQuestionVolunteeringsComponent;
  let fixture: ComponentFixture<ModalQuestionVolunteeringsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalQuestionVolunteeringsComponent]
    });
    fixture = TestBed.createComponent(ModalQuestionVolunteeringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
