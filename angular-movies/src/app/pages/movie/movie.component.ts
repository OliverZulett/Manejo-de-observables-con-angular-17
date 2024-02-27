import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent implements OnInit {
  showMovieFormModal = false;

  movie$!: Observable<Movie>

  images = {
    backdrops: [
      {
        aspect_ratio: 1.778,
        height: 1080,
        iso_639_1: null,
        file_path:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/wVhE0H3v7Qu6PxKVXvSWa1q6z53.jpg',
        vote_average: 5.106,
        vote_count: 2,
        width: 1920,
      },
      {
        aspect_ratio: 1.778,
        height: 1080,
        iso_639_1: null,
        file_path:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/6bqeDKvD6ivRPjINok5uSufLYIg.jpg',
        vote_average: 5.106,
        vote_count: 2,
        width: 1920,
      },
      {
        aspect_ratio: 1.778,
        height: 1080,
        iso_639_1: null,
        file_path:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/1v7PsM3LrAfNIYNn1Cg7YU0LtTJ.jpg',
        vote_average: 5.044,
        vote_count: 3,
        width: 1920,
      },
      {
        aspect_ratio: 1.778,
        height: 1080,
        iso_639_1: null,
        file_path:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/5HdbXdgSle4TIlapT08fiafocm6.jpg',
        vote_average: 5.044,
        vote_count: 3,
        width: 1920,
      },
      {
        aspect_ratio: 1.778,
        height: 1080,
        iso_639_1: null,
        file_path:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/c1zcZDruzyUSuh22h8U5EiYBwyQ.jpg',
        vote_average: 5.044,
        vote_count: 3,
        width: 1920,
      },
      {
        aspect_ratio: 1.778,
        height: 1080,
        iso_639_1: 'zh',
        file_path:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/aathprwC1iNESPWzBSfDdmarGrj.jpg',
        vote_average: 0,
        vote_count: 0,
        width: 1920,
      },
      {
        aspect_ratio: 1.778,
        height: 2160,
        iso_639_1: 'ru',
        file_path:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/yeFpKyLAr06yHS8fOr2lrIOp8E1.jpg',
        vote_average: 0,
        vote_count: 0,
        width: 3840,
      },
      {
        aspect_ratio: 1.778,
        height: 2160,
        iso_639_1: 'fr',
        file_path:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/j6xCRki95l3oTEB7zB6jaXoWu3X.jpg',
        vote_average: 0,
        vote_count: 0,
        width: 3840,
      },
    ],
    id: 122,
  };

  reviews = {
    id: 122,
    page: 1,
    results: [
      {
        author: 'JPV852',
        content:
          "Great finale to a great trilogy. The action and battle sequences were amazing and even though I've seen this a few times over the years, still thrilling to the end. I didn't even mind the multiple endings as I had in the past, nice each character got their due. **4.75/5**",
        created_at: '2020-09-21T04:42:23.963Z',
        id: '5f682f2f1b1f3c0039ad9373',
        updated_at: '2021-06-23T15:58:44.903Z',
      },
    ],
    total_pages: 1,
    total_results: 7,
  };
  
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movie$ = this.moviesService.getMovieById('eb0a');
  }

  showMovieForm(): void {
    this.showMovieFormModal = !this.showMovieFormModal;
  }
}
