import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable, tap } from 'rxjs';
import { MovieList } from '../../interfaces/movie-list';
import { MoviesState } from '../../state/movie.state';
import { MovieFormState } from '../../state/movieform.state';
import { FormType } from '../../enums/movieform.type';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {
  showModal = false;

  movies$!: Observable<Array<MovieList>>;
  movieFormDisplayState$!: Observable<boolean>;

  constructor(
    private moviesService: MoviesService,
    private moviesState: MoviesState,
    private movieFormState: MovieFormState
  ) {}

  ngOnInit(): void {
    this.movies$ = this.moviesService
      .getMovies()
      .pipe(tap((movies) => this.moviesState.setTotalMovies(movies.length)));

    this.movieFormDisplayState$ = this.movieFormState.getDisplayState()
  }

  showMovieForm(): void {
    this.movieFormState.setDisplayState(true);
    this.movieFormState.setMovieFormTitle(FormType.create);
  }
}
