import { TestBed } from '@angular/core/testing';

import { InterestDetailsService } from './interest-details.service';

describe('InterestDetailsService', () => {
  let service: InterestDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
