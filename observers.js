import { Observable } from 'rxjs'

const observer = {
  next: x => console.log(`value from next: ${x}`),
  error: x => console.log(`value from error: ${x}`),
  complete: () => console.log(`complete`),
}

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  // subscriber.error('error from observable')
  subscriber.next(3);
  subscriber.complete();
})

// observable.subscribe(observer);
// observable.subscribe(x => console.log(`value from next: ${x}`));
observable.subscribe({
  next(valueFromObservable) { console.log(`value from next: ${valueFromObservable}`) },
  error(err) { console.log(`value from error: ${err}`) },
  complete() { console.log(`complete`) }
});