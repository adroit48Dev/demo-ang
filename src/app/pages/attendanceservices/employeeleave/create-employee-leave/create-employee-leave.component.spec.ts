import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeLeaveComponent } from './create-employee-leave.component';

describe('CreateEmployeeLeaveComponent', () => {
  let component: CreateEmployeeLeaveComponent;
  let fixture: ComponentFixture<CreateEmployeeLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
