import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const observable = new Observable(observer => {
      observer.next(1),
      observer.next(2),
      observer.next(3),
      observer.complete()
    });

    observable.subscribe({
      next: (console.log),
      complete: () => (console.log('complete'))
    })
  }

}
