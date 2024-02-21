import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { EditMovieComponent } from './pages/edit-movie/edit-movie.component';
import { CreateMovieComponent } from './pages/create-movie/create-movie.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
  },
  {
    path: 'edit-movie/:id',
    component: EditMovieComponent,
  },
  {
    path: 'create-movie/:id',
    component: CreateMovieComponent,
  },
  {
    path: '**',
    component: MovieListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
