import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { RouterModule } from '@angular/router';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateMovieComponent } from './create-movie/create-movie.component';

@NgModule({
  declarations: [MovieListComponent, MovieComponent, EditMovieComponent, CreateMovieComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [MovieListComponent, MovieComponent, EditMovieComponent],
})
export class PagesModule {}
