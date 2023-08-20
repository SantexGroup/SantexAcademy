import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoprincipalComponent } from './logoprincipal.component';

describe('LogoprincipalComponent', () => {
  let component: LogoprincipalComponent;
  let fixture: ComponentFixture<LogoprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
