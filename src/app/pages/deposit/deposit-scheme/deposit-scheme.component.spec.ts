import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSchemeComponent } from './deposit-scheme.component';

describe('DepositSchemeComponent', () => {
  let component: DepositSchemeComponent;
  let fixture: ComponentFixture<DepositSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
