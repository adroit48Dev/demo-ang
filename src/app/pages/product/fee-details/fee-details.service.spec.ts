import { TestBed } from '@angular/core/testing';

import { FeeDetailsService } from './fee-details.service';

describe('FeeDetailsService', () => {
  let service: FeeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
