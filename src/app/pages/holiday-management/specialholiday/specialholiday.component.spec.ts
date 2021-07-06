import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialHolidayComponent } from './specialholiday.component';

describe('SpecialHolidayComponent', () => {
  let component: SpecialHolidayComponent;
  let fixture: ComponentFixture<SpecialHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialHolidayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
