import { Component, OnInit } from '@angular/core';
import { ObservablesHandlerService } from './observables-handler.service';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pairs$!: Observable<string>;
  odds$!: Observable<string>;
  factorOf3$!: Observable<string>;

  showPairs = false;
  showOdds = false;
  showFactorOf3 = false;

  constructor(private observablesHandlerService: ObservablesHandlerService) {}

  ngOnInit(): void {
    this.pairs$ = this.observablesHandlerService.interval$.pipe(
      filter((intervalValue) => intervalValue % 2 === 0),
      map((intervalValue) => `Pair value: ${intervalValue}`)
    );

    this.odds$ = this.observablesHandlerService.interval$.pipe(
      filter((intervalValue) => intervalValue % 2 !== 0),
      map((intervalValue) => `Odd value: ${intervalValue}`)
    );

    this.factorOf3$ = this.observablesHandlerService.interval$.pipe(
      filter((intervalValue) => intervalValue / 3 !== 0),
      map((intervalValue) => `Factor of 3 value: ${intervalValue}`)
    );
  }

  togglePairs(): void {
    this.showPairs = !this.showPairs;
  }

  toggleOdds(): void {
    this.showOdds = !this.showOdds;
  }

  toggleFactorOf3(): void {
    this.showFactorOf3 = !this.showFactorOf3;
  }
}
