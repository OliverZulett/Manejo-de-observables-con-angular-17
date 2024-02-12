import { Component, OnInit } from '@angular/core';
import { ObservablesHandlerService } from './observables-handler.service';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  valueFromObservable: string;

  private printPairs$ = new Subject<boolean>();

  constructor(private observablesHandlerService: ObservablesHandlerService) {
    this.valueFromObservable = '';
  }

  ngOnInit(): void {
    this.observablesHandlerService.interval$
      .pipe(
        withLatestFrom(this.printPairs$),
        filter(([value, printPairs]) => (printPairs && value % 2 === 0) || (!printPairs && value % 2 !== 0)),
        map(([value, printPairs]) => `The value: ${value} is ${printPairs ? 'pair': 'odd'}`)
      )
      .subscribe(value => this.valueFromObservable = value);
  }

  printPairs(): void {
    this.printPairs$.next(true)
  }

  printOdds(): void {
    this.printPairs$.next(false)
  }

  emitComplete(): void {
    this.observablesHandlerService.observable$.complete();
  }
}
