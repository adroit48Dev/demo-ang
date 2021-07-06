import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHolidayComponent } from './defaultholiday.component';

describe('DefaultHolidayComponent', () => {
  let component: DefaultHolidayComponent;
  let fixture: ComponentFixture<DefaultHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultHolidayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
