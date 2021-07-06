import { TestBed } from '@angular/core/testing';

import { BankdepositService } from './bankdeposit.service';

describe('BankdepositService', () => {
  let service: BankdepositService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankdepositService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
