import { of, from } from 'rxjs';

// BASIC OBSERVABLE
const observable = new Observable(function observer(subscriber) {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next('3');
  setTimeout(() => {
    subscriber.next(4);
  }, 500);
  subscriber.next(5);

  let intervalValue = 0;
  setInterval(() => {
    subscriber.next(`Interval value: ${intervalValue++}`);
  }, 200);

  setTimeout(() => {
    // subscriber.complete()
    subscriber.error(new Error('error from observable'));
  }, 2000);
});


// OBSERVABLE WITH PARAMS
const observerWithParams = (params) =>
  function observer(subscriber) {
    subscriber.next(params);
  };

const observableWithParams = new Observable(observerWithParams('Hello World!'));


// OBSERVABLE FROM SUBJECT
const observableSubject = new Subject();

observableSubject.next(1);
observableSubject.next(2);
observableSubject.error('error from subject');
observableSubject.next(3);
observableSubject.complete();
observableSubject.next(4);


// OBSERVABLE FROM OF AND FROM
const observableOf = of('some text', 2, 3);
const observableFrom = from([1, 2, 3]);

observableFrom.subscribe(console.log);
