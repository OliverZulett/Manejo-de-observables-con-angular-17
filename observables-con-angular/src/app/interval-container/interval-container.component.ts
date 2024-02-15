import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  filter,
  map,
  takeUntil,
  withLatestFrom,
} from 'rxjs';

@Component({
  selector: 'app-interval-container',
  templateUrl: './interval-container.component.html',
  styleUrls: ['./interval-container.component.scss'],
})
export class IntervalContainerComponent implements OnInit, OnDestroy {
  @Input() interval$!: Observable<number>;

  valueFromObservable: string;

  private printPairs$ = new Subject<boolean>();

  private destroy$ = new Subject<boolean>();

  constructor() {
    this.valueFromObservable = '';
  }

  ngOnInit(): void {
    this.interval$
      .pipe(
        takeUntil(this.destroy$),
        withLatestFrom(this.printPairs$),
        filter(
          ([value, printPairs]) =>
            (printPairs && value % 2 === 0) || (!printPairs && value % 2 !== 0)
        ),
        map(
          ([value, printPairs]) =>
            `The value: ${value} is ${printPairs ? 'pair' : 'odd'}`
        )
      )
      .subscribe((value) => (this.valueFromObservable = value));

    this.printOdds();
  }

  printPairs(): void {
    this.printPairs$.next(true);
  }

  printOdds(): void {
    this.printPairs$.next(false);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
