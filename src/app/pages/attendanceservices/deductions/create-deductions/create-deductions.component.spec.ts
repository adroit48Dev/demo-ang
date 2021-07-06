import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeductionsComponent } from './create-deductions.component';

describe('CreateDeductionsComponent', () => {
  let component: CreateDeductionsComponent;
  let fixture: ComponentFixture<CreateDeductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDeductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
