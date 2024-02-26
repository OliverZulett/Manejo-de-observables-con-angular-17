import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { MovieList } from '../../interfaces/movie-list';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {
  showModal = false;

  movies$!: Observable<Array<MovieList>>;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies$ = this.moviesService.getMovies();
  }

  showMovieForm(): void {
    this.showModal = !this.showModal;
  }
}
