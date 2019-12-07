import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AllMoviesService } from './all-movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  movies: any;
  movie: any;
  upcoming_movies: any;
  popular_movies: any;
  search_result: any;

  constructor(public allMovieService: AllMoviesService) {
    this.allMovieService.missionAnnounced$.subscribe((res)=>
    {
      console.log(res);
      this.search_result=res;
    },(err)=>
    {
      console.log(err);
    })

    this.allMovieService.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
    });

    this.allMovieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
    });

  }

  searchMovies() {
    // this.allMovieService.searchMovie(this.movie).subscribe(data => {
    //   this.search_result = data['results'];
    // });
  }

  ngOnInit() {}

}
