import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceServicesComponent } from './attendanceservices.component';

describe('AttendanceServicesComponent', () => {
  let component: AttendanceServicesComponent;
  let fixture: ComponentFixture<AttendanceServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
