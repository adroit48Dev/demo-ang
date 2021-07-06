import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultTransactionComponent } from './vault-transaction.component';

describe('VaultTransactionComponent', () => {
  let component: VaultTransactionComponent;
  let fixture: ComponentFixture<VaultTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
