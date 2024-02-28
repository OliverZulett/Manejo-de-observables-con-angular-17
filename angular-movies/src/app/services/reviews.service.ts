import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewResponse } from '../interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getReviewsByMovieId(movieId: string): Observable<ReviewResponse> {
    return this.httpClient.get<ReviewResponse>(
      `${this.API_URL}/reviews/${movieId}`
    );
  }
}
