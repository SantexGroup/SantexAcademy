import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACTANOSComponent } from './contactanos.component';

describe('CONTACTANOSComponent', () => {
  let component: CONTACTANOSComponent;
  let fixture: ComponentFixture<CONTACTANOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CONTACTANOSComponent]
    });
    fixture = TestBed.createComponent(CONTACTANOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
