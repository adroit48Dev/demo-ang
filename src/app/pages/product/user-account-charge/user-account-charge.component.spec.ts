import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountChargeComponent } from './user-account-charge.component';

describe('UserAccountChargeComponent', () => {
  let component: UserAccountChargeComponent;
  let fixture: ComponentFixture<UserAccountChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
