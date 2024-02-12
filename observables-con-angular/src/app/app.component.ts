import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  valueFromObservable: number;

  private observable: Observable<number> = new Observable((observer) => {
    // observer.next(1),
    // observer.next(2),
    // observer.next(3),
    // observer.complete()
    let intervalValue = 1;

    setInterval(() => {
      observer.next(intervalValue++);
    }, 500);

    setTimeout(() => {
      observer.complete();
    }, 5000);
  });

  constructor() {
    this.valueFromObservable = 0;

    this.observable.subscribe({
      next: (value: number) => {
        this.valueFromObservable = value;
      },
      complete: () => console.log('complete'),
    });
  }
}
