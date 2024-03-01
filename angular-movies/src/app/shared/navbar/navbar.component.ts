import { Component, OnInit } from '@angular/core';
import { MoviesState } from '../../state/movies.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  totalMovies$!: Observable<number>;

  constructor(private moviesState: MoviesState) {}

  ngOnInit(): void {
    this.totalMovies$ = this.moviesState.getTotalMovies();
  }
}
