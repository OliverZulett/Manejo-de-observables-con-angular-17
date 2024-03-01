import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesState {
  private totalMovies$ = new Subject<number>();

  getTotalMovies(): Observable<number> {
    return this.totalMovies$
  }

  setTotalMovies(totalMovies: number): void {
    this.totalMovies$.next(totalMovies)
  }
}
