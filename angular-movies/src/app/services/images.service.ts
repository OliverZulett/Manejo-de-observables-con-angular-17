import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagesResponse } from '../interfaces/image';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getImageByMovieId(movieId: string): Observable<ImagesResponse> {
    return this.httpClient.get<ImagesResponse>(
      `${this.API_URL}/images/${movieId}`
    );
  }
}
