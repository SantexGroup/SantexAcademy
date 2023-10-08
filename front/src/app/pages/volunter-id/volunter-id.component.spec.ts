import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunterIdComponent } from './volunter-id.component';

describe('VolunterIdComponent', () => {
  let component: VolunterIdComponent;
  let fixture: ComponentFixture<VolunterIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunterIdComponent]
    });
    fixture = TestBed.createComponent(VolunterIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
