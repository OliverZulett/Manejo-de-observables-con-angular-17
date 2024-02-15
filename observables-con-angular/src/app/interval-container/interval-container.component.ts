import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-interval-container',
  templateUrl: './interval-container.component.html',
  styleUrls: ['./interval-container.component.scss'],
})
export class IntervalContainerComponent {
  @Input() value$!: Observable<string>;
}
