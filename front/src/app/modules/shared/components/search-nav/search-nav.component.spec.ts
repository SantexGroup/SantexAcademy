import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavComponent } from './search-nav.component';

describe('SearchNavComponent', () => {
  let component: SearchNavComponent;
  let fixture: ComponentFixture<SearchNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
