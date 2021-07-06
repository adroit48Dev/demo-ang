import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchregisterComponent } from './branchregister.component';

describe('BranchregisterComponent', () => {
  let component: BranchregisterComponent;
  let fixture: ComponentFixture<BranchregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
