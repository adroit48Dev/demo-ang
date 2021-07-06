import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransLimitComponent } from './viewtrans-limit.component';

describe('viewtrans-limit', () => {
  let component: ViewTransLimitComponent;
  let fixture: ComponentFixture<ViewTransLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTransLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
