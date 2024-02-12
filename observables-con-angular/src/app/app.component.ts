import { Component, OnInit } from '@angular/core';
import { Subject, from, of } from 'rxjs';
import { ObservablesHandlerService } from './observables-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  valueFromObservable: number;

  private intervalValue = 1;

  constructor(private observablesHandlerService: ObservablesHandlerService) {
    this.valueFromObservable = 0;
  }

  ngOnInit(): void {
    this.observablesHandlerService.observable$.subscribe({
      next: (value: number) => {
        this.valueFromObservable = value;
      },
      complete: () => console.log('complete'),
    });

    this.observablesHandlerService.of$.subscribe(console.log)
    this.observablesHandlerService.from$.subscribe(console.log)
  }

  emitValue(): void {
    this.observablesHandlerService.observable$.next(this.intervalValue++);
  }

  emitComplete(): void {
    this.observablesHandlerService.observable$.complete();
  }
}
