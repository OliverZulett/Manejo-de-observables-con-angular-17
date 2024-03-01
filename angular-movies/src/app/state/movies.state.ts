import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesState {
  private totalMovies$ = new Subject<number>();
  private selectedMovie$ = new BehaviorSubject<Partial<Movie>>({} as Partial<Movie>);

  getTotalMovies(): Observable<number> {
    return this.totalMovies$;
  }

  setTotalMovies(totalMovies: number): void {
    this.totalMovies$.next(totalMovies);
  }

  getSelectedMovie(): Observable<Partial<Movie>> {
    return this.selectedMovie$
  }

  setSelectedMovie(selectedMovie: Partial<Movie>): void {
    return this.selectedMovie$.next(selectedMovie)
  }
}
