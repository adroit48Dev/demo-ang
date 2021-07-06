import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestDetailsviewComponent } from './interest-detailsview.component';

describe('InterestDetailsviewComponent', () => {
  let component: InterestDetailsviewComponent;
  let fixture: ComponentFixture<InterestDetailsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestDetailsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestDetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
