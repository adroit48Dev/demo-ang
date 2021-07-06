import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepositSchemeComponent } from './update-deposit-scheme.component';

describe('UpdateDepositSchemeComponent', () => {
  let component: UpdateDepositSchemeComponent;
  let fixture: ComponentFixture<UpdateDepositSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDepositSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDepositSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
