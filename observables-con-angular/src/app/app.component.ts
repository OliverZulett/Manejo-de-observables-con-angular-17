import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  valueFromObservable: number;

  private observable = new Subject<number>();
  private intervalValue = 1;

  constructor() {
    this.valueFromObservable = 0;
  }

  ngOnInit(): void {
    this.observable.subscribe({
      next: (value: number) => {
        this.valueFromObservable = value;
      },
      complete: () => console.log('complete'),
    });
  }

  emitValue(): void {
    this.observable.next(this.intervalValue++);
  }

  emitComplete(): void {
    this.observable.complete();
  }
}
