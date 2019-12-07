import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  selectedMovie: Movie;

  constructor(private movieservice: MovieService) { }

  ngOnInit() {
    // this.movieservice.movieSelected
    // .subscribe(
    //   (movie: Movie) => {
    //     this.selectedMovie = movie;
    //   }
    // );
  }
}
