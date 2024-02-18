import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { RouterModule } from '@angular/router';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MovieListComponent, MovieComponent, EditMovieComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [MovieListComponent, MovieComponent, EditMovieComponent],
})
export class PagesModule {}
