import { TestBed } from '@angular/core/testing';

import { UpdateconditionService } from './updatecondition.service';

describe('UpdateconditionService', () => {
  let service: UpdateconditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateconditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
