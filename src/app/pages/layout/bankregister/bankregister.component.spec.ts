import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankregisterComponent } from './bankregister.component';

describe('BankregisterComponent', () => {
  let component: BankregisterComponent;
  let fixture: ComponentFixture<BankregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
