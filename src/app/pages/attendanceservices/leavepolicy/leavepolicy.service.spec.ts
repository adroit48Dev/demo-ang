import { TestBed } from '@angular/core/testing';

import { LeavepolicyService } from './leavepolicy.service';

describe('LeavepolicyService', () => {
  let service: LeavepolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavepolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
