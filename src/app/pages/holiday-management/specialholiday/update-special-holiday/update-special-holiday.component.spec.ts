import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecialHolidayComponent } from './update-special-holiday.component';

describe('UpdateSpecialHolidayComponent', () => {
  let component: UpdateSpecialHolidayComponent;
  let fixture: ComponentFixture<UpdateSpecialHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSpecialHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSpecialHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
