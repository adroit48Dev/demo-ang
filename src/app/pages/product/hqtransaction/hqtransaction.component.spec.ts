import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HQTransactionComponent } from './hqtransaction.component';

describe('HQTransactionComponent', () => {
  let component: HQTransactionComponent;
  let fixture: ComponentFixture<HQTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HQTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HQTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
