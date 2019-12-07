import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMovieDetailsComponent } from './all-movie-details.component';

describe('AllMovieDetailsComponent', () => {
  let component: AllMovieDetailsComponent;
  let fixture: ComponentFixture<AllMovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
