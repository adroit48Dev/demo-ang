import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenearalLedgerComponent } from './genearal-ledger.component';

describe('GenearalLedgerComponent', () => {
  let component: GenearalLedgerComponent;
  let fixture: ComponentFixture<GenearalLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenearalLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenearalLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
