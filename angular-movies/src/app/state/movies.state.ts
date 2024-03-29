import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesState {
  private totalMovies$ = new Subject<number>();
  private selectedMovie$ = new BehaviorSubject<Movie>({} as Movie);

  getTotalMovies(): Observable<number> {
    return this.totalMovies$;
  }

  setTotalMovies(totalMovies: number): void {
    this.totalMovies$.next(totalMovies);
  }

  getSelectedMovie(): Observable<Movie> {
    return this.selectedMovie$
  }

  setSelectedMovie(selectedMovie: Movie): void {
    return this.selectedMovie$.next(selectedMovie)
  }
}
