import { Observable } from 'rxjs';


return  function observer(subscriber) {
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
    subscriber.error(new Error('error from observable'))
  }, 2000);
}

const observable = new Observable();

observable.subscribe(console.log);
