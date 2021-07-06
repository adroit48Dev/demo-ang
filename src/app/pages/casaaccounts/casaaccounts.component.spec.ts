import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaaccountsComponent } from './casaaccounts.component';

describe('CasaaccountsComponent', () => {
  let component: CasaaccountsComponent;
  let fixture: ComponentFixture<CasaaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
