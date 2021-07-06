import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDepositFormComponent } from './bank-deposit-form.component';

describe('BankDepositFormComponent', () => {
  let component: BankDepositFormComponent;
  let fixture: ComponentFixture<BankDepositFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankDepositFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDepositFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
