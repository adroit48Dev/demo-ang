import { TestBed } from '@angular/core/testing';

import { DepositinfoService } from './depositinfo.service';

describe('DepositinfoService', () => {
  let service: DepositinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
