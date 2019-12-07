import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStartComponent } from './movie-start.component';

describe('MovieStartComponent', () => {
  let component: MovieStartComponent;
  let fixture: ComponentFixture<MovieStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
