import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { AllMoviesService } from './all-movies/all-movies.service';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieService } from './movies/movies.service';
import { AllMovieDetailsComponent } from './all-movies/all-movie-details/all-movie-details.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people/people.service';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieListComponent,
    MovieItemComponent,
    MoviesDetailComponent,
    AllMoviesComponent,
    MovieStartComponent,
    MovieEditComponent,
    AllMovieDetailsComponent,
    PeopleComponent,
    PeopleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    
  ],
  providers: [AllMoviesService, MovieService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
