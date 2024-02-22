import { Injectable } from '@angular/core';
import { Subject, from, interval, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableHandlerService {
  observable$ = new Subject<number>();
  of$ = of(1,2,3,4);
  from$ = from([1,2,3,4]);
  interval$ = interval(200);

  constructor() { }
}
