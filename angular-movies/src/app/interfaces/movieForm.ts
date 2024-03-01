import { FormType } from '../enums/movieform.type';
import { Movie } from './movie';

export interface MovieForm {
  movieData?: Partial<Movie>;
  formType: FormType;
}