import { Injectable } from '@angular/core';
import { MovieService } from '../movies/movies.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Movie } from '../movies/movie.model';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/Rx';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
    private movieService: MovieService,) { }

  storeMovies(): Observable<any> {
    const req = new HttpRequest('PUT', 'https://moviepedia-4211a.firebaseio.com/movies.json', this.movieService.getMovies(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getMovies() {
    this.httpClient.get<Movie[]>('https://moviepedia-4211a.firebaseio.com/movies.json', {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map(
        (movies) => {
          console.log(movies);
          return movies;
        }
      ))
      .subscribe(
        (movies: Movie[]) => {
          this.movieService.setMovies(movies);
        }
      );
  }
}
