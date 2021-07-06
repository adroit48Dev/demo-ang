import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAccCreationFormComponent } from './loan-acc-creation-form.component';

describe('LoanAccCreationFormComponent', () => {
  let component: LoanAccCreationFormComponent;
  let fixture: ComponentFixture<LoanAccCreationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAccCreationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAccCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
