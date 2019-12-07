import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../save/data-storage.service';
import { AllMoviesService } from '../all-movies/all-movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
    private movieService : AllMoviesService
    ) { }

  ngOnInit() {
  }

  movie: any;
  searchMovies() {
    console.log(this.movie);
    this.movieService.searchMovie(this.movie);
  }
  onSaveData() {
    this.dataStorageService.storeMovies()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getMovies();
  }

}
