import { TestBed } from '@angular/core/testing';

import { BranchregisterService } from './branchregister.service';

describe('BranchregisterService', () => {
  let service: BranchregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
