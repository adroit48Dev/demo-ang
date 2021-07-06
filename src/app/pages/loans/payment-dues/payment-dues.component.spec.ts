import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDuesComponent } from './payment-dues.component';

describe('PaymentDuesComponent', () => {
  let component: PaymentDuesComponent;
  let fixture: ComponentFixture<PaymentDuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
