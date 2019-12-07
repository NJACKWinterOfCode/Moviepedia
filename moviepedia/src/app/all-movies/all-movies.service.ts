import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AllMoviesService {

  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = '4a7711ce4033e38e64bb7adb7c50cff2';
  private movie_string: any;
  movie: any;

  private movieAnnouncedSource = new Subject<string>();
  missionAnnounced$ = this.movieAnnouncedSource.asObservable();

  constructor(public _http: HttpClient) { }

  getUpcomingMovies() {
    return this._http.get(this.movie_url + 'discover/movie?primary_release_date.gte=2018-04-15&primary_release_date.lte=2018-07-31' + '&api_key=' + this.api_key);
  }

  getPopularMovies() {
    return this._http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
  }

  searchMovie(movie: string) {
    this.movie_string = movie;
    this._http.get(this.movie_url + 'search/movie?query=' + this.movie_string + '&api_key=' + this.api_key)
    .subscribe((res)=>
    {
      console.log(res);
      this.movieAnnouncedSource.next(res['results']);
    },(err)=>
    {
      console.log(err);
    })
  }

  getMovie(id: number) {
    return this._http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
  }
}
