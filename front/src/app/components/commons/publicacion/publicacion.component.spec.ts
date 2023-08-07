import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionComponent } from './publicacion.component';

describe('PublicacionComponent', () => {
  let component: PublicacionComponent;
  let fixture: ComponentFixture<PublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
