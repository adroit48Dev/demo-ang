import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsviewComponent } from './account-detailsview.component';

describe('AccountDetailsviewComponent', () => {
  let component: AccountDetailsviewComponent;
  let fixture: ComponentFixture<AccountDetailsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDetailsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
