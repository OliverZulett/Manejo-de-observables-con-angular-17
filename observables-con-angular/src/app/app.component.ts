import { Component, OnInit } from '@angular/core';
import { ObservableHandlerService } from './observable-handler.service';
import { Observable, Subject, Subscription, filter, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showInterval = false;
  interval$!: Observable<number>;

  constructor(private observableHandlerService: ObservableHandlerService) {
  }

  ngOnInit(): void {
    this.interval$ = this.observableHandlerService.interval$
  }

  toggleInterval(): void {
    this.showInterval = !this.showInterval;
  }
}
