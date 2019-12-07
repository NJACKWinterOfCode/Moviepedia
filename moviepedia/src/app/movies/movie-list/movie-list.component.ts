import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Movie } from '../movie.model'
import { MovieService } from '../movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  
  movies: Movie[] = [];

  constructor(private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.movieService.moviesChanged
    .subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      }
    );
  this.movies = this.movieService.getMovies();
  }

  onNewMovie() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
