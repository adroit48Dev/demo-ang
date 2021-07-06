import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavePolicyComponent } from './leavepolicy.component';

describe('leavepolicy', () => {
  let component: LeavePolicyComponent;
  let fixture: ComponentFixture<LeavePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
