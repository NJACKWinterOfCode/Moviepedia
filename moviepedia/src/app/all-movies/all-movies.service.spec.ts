import { TestBed } from '@angular/core/testing';

import { AllMoviesService } from './all-movies.service';

describe('AllMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllMoviesService = TestBed.get(AllMoviesService);
    expect(service).toBeTruthy();
  });
});
