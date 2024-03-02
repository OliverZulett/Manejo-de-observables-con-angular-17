import { TestBed } from '@angular/core/testing';

import { ObservablesHandlerService } from './observables-handler.service';

describe('ObservablesHandlerService', () => {
  let service: ObservablesHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservablesHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
