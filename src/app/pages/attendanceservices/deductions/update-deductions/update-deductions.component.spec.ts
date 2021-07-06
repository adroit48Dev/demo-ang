import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeductionsComponent } from './update-deductions.component';

describe('UpdateDeductionsComponent', () => {
  let component: UpdateDeductionsComponent;
  let fixture: ComponentFixture<UpdateDeductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
