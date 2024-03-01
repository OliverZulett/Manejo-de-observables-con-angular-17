import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map, switchMap, takeUntil } from 'rxjs';
import { Movie } from '../../interfaces/movie';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../../interfaces/image';
import { Review } from '../../interfaces/review';
import { ImagesService } from '../../services/images.service';
import { ReviewsService } from '../../services/reviews.service';
import { MoviesState } from '../../state/movies.state';
import { MovieFormState } from '../../state/movieForm.state';
import { FormType } from '../../enums/formType';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent implements OnInit, OnDestroy {
  movieFormDisplayState$!: Observable<boolean>;

  movie$!: Observable<Movie>;

  images$!: Observable<Array<Image>>;
  reviews$!: Observable<Array<Review>>;

  private destroy$ = new Subject<void>();

  constructor(
    private moviesService: MoviesService,
    private imagesService: ImagesService,
    private reviewsService: ReviewsService,
    private movieFormState: MovieFormState,
    private moviesState: MoviesState,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setSelectedMovie();
    this.movie$ = this.moviesState.getSelectedMovie();

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

    this.movieFormDisplayState$ = this.movieFormState.getDisplayState();
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

  private setSelectedMovie(): void {
    this.activatedRoute.params
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params) => this.moviesService.getMovieById(params['id']))
      )
      .subscribe((movie) => this.moviesState.setSelectedMovie(movie));
  }
}
