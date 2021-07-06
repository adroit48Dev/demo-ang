import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCreationFormComponent } from './loan-creation-form.component';

describe('LoanCreationFormComponent', () => {
  let component: LoanCreationFormComponent;
  let fixture: ComponentFixture<LoanCreationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCreationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
