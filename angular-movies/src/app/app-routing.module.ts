import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';

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
    path: '**',
    component: MovieListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
