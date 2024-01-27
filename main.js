import { Subject } from 'rxjs';

const observable = new Subject();

observable.subscribe(console.log);

observable.next(1);
observable.next(2);
observable.error('error from subject')
observable.next(3);
observable.complete();
observable.next(4);
