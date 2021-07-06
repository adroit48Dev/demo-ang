import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsupdateComponent } from './account-detailsupdate.component';

describe('AccountDetailsupdateComponent', () => {
  let component: AccountDetailsupdateComponent;
  let fixture: ComponentFixture<AccountDetailsupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDetailsupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
