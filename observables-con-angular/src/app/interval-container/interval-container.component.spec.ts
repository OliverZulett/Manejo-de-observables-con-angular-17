import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalContainerComponent } from './interval-container.component';

describe('IntervalContainerComponent', () => {
  let component: IntervalContainerComponent;
  let fixture: ComponentFixture<IntervalContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalContainerComponent]
    });
    fixture = TestBed.createComponent(IntervalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
