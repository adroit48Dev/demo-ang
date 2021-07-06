import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBankDepositComponent } from './update-bank-deposit.component';

describe('UpdateBankDepositComponent', () => {
  let component: UpdateBankDepositComponent;
  let fixture: ComponentFixture<UpdateBankDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBankDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBankDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
