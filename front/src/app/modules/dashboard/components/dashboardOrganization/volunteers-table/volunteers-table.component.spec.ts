import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteersTableComponent } from './volunteers-table.component';

describe('VolunteersTableComponent', () => {
  let component: VolunteersTableComponent;
  let fixture: ComponentFixture<VolunteersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteersTableComponent]
    });
    fixture = TestBed.createComponent(VolunteersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
