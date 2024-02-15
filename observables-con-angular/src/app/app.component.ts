import { Component, OnInit } from '@angular/core';
import { ObservablesHandlerService } from './observables-handler.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showInterval = false;
  interval$!: Observable<number>;

  constructor(private observablesHandlerService: ObservablesHandlerService) {}

  ngOnInit(): void {
    this.interval$ = this.observablesHandlerService.interval$;
  }

  toggleInterval(): void {
    this.showInterval = !this.showInterval;
  }
}
