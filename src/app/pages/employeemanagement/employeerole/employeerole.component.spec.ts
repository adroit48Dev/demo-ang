import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRoleComponent } from './employeerole.component';

describe('EmployeeRole', () => {
  let component: EmployeeRoleComponent;
  let fixture: ComponentFixture<EmployeeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
