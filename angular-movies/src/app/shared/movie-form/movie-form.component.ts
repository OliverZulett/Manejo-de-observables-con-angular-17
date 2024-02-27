import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss',
})
export class MovieFormComponent implements OnInit, OnDestroy {
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
  }

  onSubmit(): void {
    this.moviesService
      .postMovie(this.movieForm.value)
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
