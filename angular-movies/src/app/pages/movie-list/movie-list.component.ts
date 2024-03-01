import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable, tap } from 'rxjs';
import { MovieList } from '../../interfaces/movie-list';
import { MoviesState } from '../../state/movies.state';
import { MovieFormState } from '../../state/movieForm.state';
import { FormType } from '../../enums/formType';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {
  movieFormDisplayState$!: Observable<boolean>;
  movies$!: Observable<Array<MovieList>>;

  constructor(
    private moviesService: MoviesService,
    private moviesState: MoviesState,
    private movieFormState: MovieFormState
  ) {}

  ngOnInit(): void {
    this.movies$ = this.moviesService
      .getMovies()
      .pipe(tap((movies) => this.moviesState.setTotalMovies(movies.length)));

    this.movieFormDisplayState$ = this.movieFormState.getDisplayState();
  }

  showMovieForm(): void {
    this.movieFormState.setDisplayState(true);
    this.movieFormState.setMovieFormTitle(FormType.create);
  }
}
