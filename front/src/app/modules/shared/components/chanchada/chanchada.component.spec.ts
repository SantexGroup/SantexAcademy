import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanchadaComponent } from './chanchada.component';

describe('ChanchadaComponent', () => {
  let component: ChanchadaComponent;
  let fixture: ComponentFixture<ChanchadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChanchadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanchadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
