import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FormType } from '../enums/formType';

@Injectable({
  providedIn: 'root',
})
export class MovieFormState {
  // private movieFormTitle$ = new Subject<FormType>();
  private movieFormTitle$ = new BehaviorSubject<FormType>(FormType.create);
  private displayState$ = new BehaviorSubject(false);

  getMovieFormTitle(): Observable<FormType> {
    return this.movieFormTitle$;
  }

  setMovieFormTitle(formTitle: FormType): void {
    this.movieFormTitle$.next(formTitle);
  }

  getDisplayState(): Observable<boolean> {
    return this.displayState$;
  }

  setDisplayState(toggleState: boolean): void {
    this.displayState$.next(toggleState);
  }
}
