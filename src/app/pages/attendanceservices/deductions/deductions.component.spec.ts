import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductionsComponent } from './deductions.component';

describe('deductions', () => {
  let component: DeductionsComponent;
  let fixture: ComponentFixture<DeductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
