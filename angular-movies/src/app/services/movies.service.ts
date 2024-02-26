import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieList } from '../interfaces/movie-list';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Array<MovieList>> {
    return this.httpClient.get<Array<MovieList>>(`${this.API_URL}/movies`);
  }

  getMovieById(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.API_URL}/movies/${id}`);
  }
}
