import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private api_key = '4a7711ce4033e38e64bb7adb7c50cff2';
  private people_url = 'https://api.themoviedb.org/3/';
  private person_string: any;
  person: any;

  constructor(public _http: HttpClient) { }

  getPeople() {
    return this._http.get(this.people_url + 'person/popular?api_key=' + this.api_key);
  }

  // getImage(){
  //   return this._http.get(this.people_url + 'person' + );
  // }

  getDetail(id: number){
    return this._http.get(this.people_url + 'person/' + id + '?api_key=' + this.api_key );
  }

  getCrew(id: number){
    return this._http.get(this.people_url + 'person/' + id + '/movie_credits?api_key=' + this.api_key );
  }

  searchPerson(person: string) {
    this.person_string = person;
    return this._http.get(this.people_url + 'search/person?api_key=' + this.api_key + '&language=en-US&query=' + this.person_string);
  }
}
