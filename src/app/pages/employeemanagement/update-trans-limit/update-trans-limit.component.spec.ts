import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTransLimitComponent } from './update-trans-limit.component';

describe('UpdateTransLimitComponent', () => {
  let component: UpdateTransLimitComponent;
  let fixture: ComponentFixture<UpdateTransLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTransLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTransLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
