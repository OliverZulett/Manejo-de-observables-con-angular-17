import { Component, OnInit } from '@angular/core';
import { Subject, from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  valueFromObservable: number;

  private observable$ = new Subject<number>();
  private of$ = of(1, 2, 3, 4);
  private from$ = from([1, 2, 3, 4]);

  private intervalValue = 1;

  constructor() {
    this.valueFromObservable = 0;
  }

  ngOnInit(): void {
    this.observable$.subscribe({
      next: (value: number) => {
        this.valueFromObservable = value;
      },
      complete: () => console.log('complete'),
    });

    this.of$.subscribe(console.log);
    this.from$.subscribe(console.log);
  }

  emitValue(): void {
    this.observable$.next(this.intervalValue++);
  }

  emitComplete(): void {
    this.observable$.complete();
  }
}
