import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositConditionFormComponent } from './deposit-condition-form.component';

describe('DepositConditionFormComponent', () => {
  let component: DepositConditionFormComponent;
  let fixture: ComponentFixture<DepositConditionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositConditionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositConditionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
