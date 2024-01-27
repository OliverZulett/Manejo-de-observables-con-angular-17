import { of, from } from 'rxjs';

const observable = of('some text', 2, 3);
const observableFrom = from([1,2,3]);

observableFrom.subscribe(console.log);