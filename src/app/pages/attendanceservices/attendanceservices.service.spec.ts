import { TestBed } from '@angular/core/testing';

import { AttendanceServicesService } from './attendanceservices.service';

describe('attendanceservicesService', () => {
  let service: AttendanceServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendanceServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
