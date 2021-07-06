import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepayClosureComponent } from './prepay-closure.component';

describe('PrepayClosureComponent', () => {
  let component: PrepayClosureComponent;
  let fixture: ComponentFixture<PrepayClosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepayClosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepayClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
