import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepositConditionComponent } from './update-deposit-condition.component';

describe('UpdateDepositConditionComponent', () => {
  let component: UpdateDepositConditionComponent;
  let fixture: ComponentFixture<UpdateDepositConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDepositConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDepositConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
