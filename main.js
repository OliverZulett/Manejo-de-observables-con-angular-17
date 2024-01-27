import { Observable } from 'rxjs';

const observerWithParams = (params) => function observer(subscriber) {
  subscriber.next(params)
}

const observable = new Observable(observerWithParams('Hello World!'));

observable.subscribe(console.log);
