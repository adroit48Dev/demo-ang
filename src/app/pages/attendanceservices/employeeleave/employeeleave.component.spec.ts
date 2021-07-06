import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveComponent } from './employeeleave.component';

describe('employeeleave', () => {
  let component: EmployeeLeaveComponent;
  let fixture: ComponentFixture<EmployeeLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
