import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAccOverviewComponent } from './loan-acc-overview.component';

describe('LoanAccOverviewComponent', () => {
  let component: LoanAccOverviewComponent;
  let fixture: ComponentFixture<LoanAccOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAccOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAccOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
