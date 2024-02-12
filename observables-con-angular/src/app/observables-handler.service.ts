import { Injectable } from '@angular/core';
import { Subject, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesHandlerService {
  observable$ = new Subject<number>();
  of$ = of(1,2,3,4);
  from$ = from([1,2,3,4])

  constructor() { }
}
