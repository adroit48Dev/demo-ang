import { TestBed } from '@angular/core/testing';

import { CreateprofileService } from './createprofile.service';

describe('CreateprofileService', () => {
  let service: CreateprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
