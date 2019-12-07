import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AllMoviesService } from '../all-movies.service';

@Component({
  selector: 'app-all-movie-details',
  templateUrl: './all-movie-details.component.html',
  styleUrls: ['./all-movie-details.component.css']
})
export class AllMovieDetailsComponent implements OnInit {
  movie: any;
  constructor(private router: ActivatedRoute, private allMovieService: AllMoviesService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.allMovieService.getMovie(id).subscribe(data => {
        this.movie = data;
        console.log(data);
      });
    });
  }
}
