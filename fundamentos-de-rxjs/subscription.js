import { interval } from 'rxjs';

const observable = interval(100);

const subscription = observable.subscribe(console.log);

setTimeout(() => {
  subscription.unsubscribe();
}, 1000);
