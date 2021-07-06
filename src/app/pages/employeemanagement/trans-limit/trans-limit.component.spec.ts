import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransLimitComponent } from './trans-limit.component';

describe('TransLimitComponent', () => {
  let component: TransLimitComponent;
  let fixture: ComponentFixture<TransLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
