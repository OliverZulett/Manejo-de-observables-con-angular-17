import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss',
})
export class MovieFormComponent implements OnInit, OnDestroy {
  @Input() movieData?: Movie;

  movieForm!: FormGroup;

  private destroy$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      title: '',
      overview: '',
      backdrop_path: '',
      release_date: '',
      budget: 0,
      revenue: 0,
      popularity: 0,
      homepage: '',
    });

    if (this.movieData) {
      this.movieForm.patchValue(this.movieData);
    }
  }

  onSubmit(): void {
    const movieObservable = this.movieData
      ? this.moviesService.patchMovie(this.movieData.id, this.movieForm.value)
      : this.moviesService.postMovie(this.movieForm.value);

    movieObservable
      .pipe(takeUntil(this.destroy$))
      .subscribe((createdMovie) =>
        this.router.navigate([`movie/${createdMovie.id}`])
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
