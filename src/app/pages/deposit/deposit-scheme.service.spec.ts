import { TestBed } from '@angular/core/testing';

import { DepositSchemeService } from './deposit-scheme.service';

describe('DepositSchemeService', () => {
  let service: DepositSchemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositSchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
