import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map, switchMap, takeUntil, tap } from 'rxjs';
import { Movie } from '../../interfaces/movie';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../../interfaces/image';
import { Review } from '../../interfaces/review';
import { ImagesService } from '../../services/images.service';
import { ReviewsService } from '../../services/reviews.service';
import { MovieFormState } from '../../state/movieform.state';
import { FormType } from '../../enums/movieform.type';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent implements OnInit, OnDestroy {
  showMovieFormModal = false;

  movie$!: Observable<Movie>;

  images$!: Observable<Array<Image>>;
  reviews$!: Observable<Array<Review>>;
  movieFormDisplayState$!: Observable<boolean>;

  private destroy$ = new Subject<void>();

  constructor(
    private moviesService: MoviesService,
    private imagesService: ImagesService,
    private movieFormState: MovieFormState,
    private reviewsService: ReviewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movie$ = this.activatedRoute.params.pipe(
      switchMap((params) => this.moviesService.getMovieById(params['id']))
    );
    this.images$ = this.activatedRoute.params.pipe(
      switchMap((params) => this.imagesService.getImageByMovieId(params['id'])),
      map((imagesResponse) => imagesResponse.backdrops)
    );
    this.reviews$ = this.activatedRoute.params.pipe(
      switchMap((params) =>
        this.reviewsService.getReviewsByMovieId(params['id'])
      ),
      map((reviewsResponse) => reviewsResponse.results)
    );
    this.movieFormDisplayState$ = this.movieFormState
      .getDisplayState()
      .pipe(
        tap(
          (movieFormDisplayState) =>
            !movieFormDisplayState && this.loadMovieDetails()
        )
      );
  }

  deleteMovie(id: string): void {
    this.moviesService
      .deleteMovie(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.router.navigate([`movies`]));
  }

  showMovieForm(): void {
    this.movieFormState.setDisplayState(true);
    this.movieFormState.setMovieFormTitle(FormType.update);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  private loadMovieDetails(): void {
    
  }
}
