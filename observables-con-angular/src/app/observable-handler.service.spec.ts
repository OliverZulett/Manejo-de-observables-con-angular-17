import { TestBed } from '@angular/core/testing';

import { ObservableHandlerService } from './observable-handler.service';

describe('ObservableHandlerService', () => {
  let service: ObservableHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
