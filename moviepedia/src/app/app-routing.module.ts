import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { AllMovieDetailsComponent } from './all-movies/all-movie-details/all-movie-details.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';

const appRoutes: Routes = [
    {path: 'movies', component: MoviesComponent, children: [
        {path: '', component: MovieStartComponent},
        { path: 'new', component: MovieEditComponent },
        {path: ':id',component: MoviesDetailComponent},
        { path: ':id/edit', component: MovieEditComponent },
    ]},
    {path:'', component: AllMoviesComponent},
    { path: 'movie/:movieID', component: AllMovieDetailsComponent },
    {path: 'people', component: PeopleComponent},
    {path: 'people/:peopleID', component: PeopleDetailComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}