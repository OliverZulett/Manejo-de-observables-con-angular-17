import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  showModal = false;

  movies: any = [
    {
      id: '123',
      backdrop_path:
        'https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
      original_title: 'Title',
      overview: 'description',
    },
  ];

  showMovieForm(): void {
    this.showModal = !this.showModal;
  }
}
