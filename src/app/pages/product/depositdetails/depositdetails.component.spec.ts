import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositdetailsComponent } from './depositdetails.component';

describe('DepositdetailsComponent', () => {
  let component: DepositdetailsComponent;
  let fixture: ComponentFixture<DepositdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
