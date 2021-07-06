import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeDetailsviewComponent } from './fee-detailsview.component';

describe('FeeDetailsviewComponent', () => {
  let component: FeeDetailsviewComponent;
  let fixture: ComponentFixture<FeeDetailsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeDetailsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeDetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
