import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSchemeFormComponent } from './deposit-scheme-form.component';

describe('DepositSchemeFormComponent', () => {
  let component: DepositSchemeFormComponent;
  let fixture: ComponentFixture<DepositSchemeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositSchemeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositSchemeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
