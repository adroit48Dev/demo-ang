import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeemanageComponent } from './employeemanage.component';

describe('EmployeemanageComponent', () => {
  let component: EmployeemanageComponent;
  let fixture: ComponentFixture<EmployeemanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeemanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
