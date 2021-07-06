import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositConditionComponent } from './deposit-condition.component';

describe('DepositConditionComponent', () => {
  let component: DepositConditionComponent;
  let fixture: ComponentFixture<DepositConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
