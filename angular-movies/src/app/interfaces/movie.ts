export interface Movie {
  backdrop_path: string;
  budget: number;
  genres: Array<{id: string, name: string}>;
  homepage: string;
  id: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }>;
  release_date: string;
  revenue: number;
  title: string;
}