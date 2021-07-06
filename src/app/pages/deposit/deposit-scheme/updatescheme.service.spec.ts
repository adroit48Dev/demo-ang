import { TestBed } from '@angular/core/testing';

import { UpdateschemeService } from './updatescheme.service';

describe('UpdateschemeService', () => {
  let service: UpdateschemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateschemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
