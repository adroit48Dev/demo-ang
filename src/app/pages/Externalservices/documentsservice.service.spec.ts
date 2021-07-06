import { TestBed } from '@angular/core/testing';

import { DocumentsserviceService } from './documentsservice.service';

describe('DocumentsserviceService', () => {
  let service: DocumentsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
