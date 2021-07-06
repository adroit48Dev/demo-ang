import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchviewComponent } from './branchview.component';

describe('BranchviewComponent', () => {
  let component: BranchviewComponent;
  let fixture: ComponentFixture<BranchviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
