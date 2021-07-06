import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmpRoleListComponent } from './allemprolelist.component';

describe('allemprolelist', () => {
  let component: AllEmpRoleListComponent;
  let fixture: ComponentFixture<AllEmpRoleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEmpRoleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmpRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
