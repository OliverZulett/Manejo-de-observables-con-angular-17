import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  movie = {
    adult: false,
    backdrop_path:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg',
    belongs_to_collection: {
      id: 119,
      name: 'El señor de los anillos - La trilogía',
      poster_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/yAonjcMRitkztnvRjrLqwpKgbXS.jpg',
      backdrop_path:
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2/bccR2CGTWVVSZAG0yqmy3DIvhTX.jpg',
    },
    budget: 94000000,
    genres: [
      {
        id: 12,
        name: 'Aventura',
      },
      {
        id: 14,
        name: 'Fantasía',
      },
      {
        id: 28,
        name: 'Acción',
      },
    ],
    homepage: '',
    id: 122,
    imdb_id: 'tt0167260',
    original_language: 'en',
    original_title: 'The Lord of the Rings: The Return of the King',
    overview:
      'Las fuerzas de Saruman han sido destruidas, y su fortaleza sitiada. Ha llegado el momento de que se decida el destino de la Tierra Media, y por primera vez en mucho tiempo, parece que hay una pequeña esperanza. La atención del señor oscuro Sauron se centra ahora en Gondor, el último reducto de los hombres, y del cual Aragorn tendrá que reclamar el trono para ocupar su puesto de rey. Pero las fuerzas de Sauron ya se preparan para lanzar el último y definitivo ataque contra el reino de Gondor, la batalla que decidirá el destino de todos. Mientras tanto, Frodo y Sam continuan su camino hacia Mordor, a la espera de que Sauron no repare en que dos pequeños Hobbits se acercan cada día más al final de su camino, el Monte del Destino.',
    popularity: 77.365,
    poster_path:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/mWuFbQrXyLk2kMBKF9TUPtDwuPx.jpg',
    production_companies: [
      {
        id: 12,
        logo_path:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/iaYpEp3LQmb8AfAtmTvpqd4149c.png',
        name: 'New Line Cinema',
        origin_country: 'US',
      },
      {
        id: 11,
        logo_path:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/6FAuASQHybRkZUk08p9PzSs9ezM.png',
        name: 'WingNut Films',
        origin_country: 'NZ',
      },
      {
        id: 5237,
        logo_path:
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2/mlnr7vsBHvLye8oEb5A76C0t8x9.png',
        name: 'The Saul Zaentz Company',
        origin_country: 'US',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'NZ',
        name: 'New Zealand',
      },
      {
        iso_3166_1: 'US',
        name: 'United States of America',
      },
    ],
    release_date: '2003-12-01',
    revenue: 1118888979,
    runtime: 202,
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English',
      },
    ],
    status: 'Released',
    tagline: 'El viaje llega a su fin.',
    title: 'El señor de los anillos: El retorno del rey',
    video: false,
    vote_average: 8.477,
    vote_count: 23017,
  };
}
