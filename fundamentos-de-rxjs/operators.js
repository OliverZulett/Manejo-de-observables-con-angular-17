import { Observable, catchError, filter, finalize, map, of, tap, from, interval } from 'rxjs'


// ------------ PIPE OPERATORS

const observable = new Observable(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  subscriber.next(4)
  subscriber.error('error from observable')
  subscriber.complete()
});

observable
.pipe(
  finalize(() => (console.log('finish'))),
  catchError(err => {
    return of(`Error: ${err}`)
  }),
  tap(valueFromObservable => (console.log(`the number from observable is ${valueFromObservable}`))),
  filter(valueFromObservable => valueFromObservable % 2 === 0),
  map(valueFromObservable => `the pair number is ${valueFromObservable}`),
)
.subscribe(console.log);

// ------------ CREATION OPERATORS

const observable1$ = of(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
const observable2$ = from([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
const interval$ = interval(200)
  .pipe(
    take(10)
  )

const pairs$ = observable1$
.pipe(
  filter(valueFromObservable => valueFromObservable % 2 === 0),
  map(valueFromObservable => `the pair number is ${valueFromObservable}`),
)

const odds$ = observable2$
.pipe(
  filter(valueFromObservable => valueFromObservable % 2 !== 0),
  map(valueFromObservable => `the odds number is ${valueFromObservable}`),
)

// ------------ JOIN OPERATORS

concat(interval$, odds$, pairs$).subscribe(console.log)

combineLatest([pairs$, odds$, interval$]).subscribe(console.log)

zip([odds$, pairs$, interval$])
.pipe(
  map(([odds, pairs, interval]) => {
    return `${odds} and ${pairs} and interval value is ${interval}`
  })
)
.subscribe(console.log)