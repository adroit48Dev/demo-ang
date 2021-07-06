import { TestBed } from '@angular/core/testing';

import { AccoundetailsService } from './accoundetails.service';

describe('AccoundetailsService', () => {
  let service: AccoundetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccoundetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
