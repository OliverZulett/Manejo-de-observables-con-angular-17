import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MovieListComponent, MovieComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SharedModule],
  exports: [MovieListComponent, MovieComponent],
})
export class PagesModule {}
