import { Observable, combineLatest, from, of, throwError, zip } from 'rxjs';
import { catchError, filter, finalize, map, tap } from 'rxjs/operators';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);
  subscriber.next(5);
  subscriber.next(6);
});

const pairs$ = observable.pipe(
  filter((valueFromObservable) => valueFromObservable % 2 === 0),
  map((valueFromObservable) => `the pair number is: ${valueFromObservable}`)
);

const odds$ = from([1, 3, 5]).pipe(
  filter(
    (valueFromObservable) => valueFromObservable % 2 !== 0
  ),
  map((valueFromObservable) => `the odd number is: ${valueFromObservable}`)
);

zip([pairs$, odds$])
  .pipe(map(([pairs$, odds$]) => `${pairs$} and ${odds$}`))
  .subscribe(console.log);
