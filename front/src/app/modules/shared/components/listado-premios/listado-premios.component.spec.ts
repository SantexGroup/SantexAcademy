import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPremiosComponent } from './listado-premios.component';

describe('ListadoPremiosComponent', () => {
  let component: ListadoPremiosComponent;
  let fixture: ComponentFixture<ListadoPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPremiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
