import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeavePolicyComponent } from './update-leave-policy.component';

describe('UpdateLeavePolicyComponent', () => {
  let component: UpdateLeavePolicyComponent;
  let fixture: ComponentFixture<UpdateLeavePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLeavePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLeavePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
