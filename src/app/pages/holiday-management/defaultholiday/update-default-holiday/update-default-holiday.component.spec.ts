import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDefaultHolidayComponent } from './update-default-holiday.component';

describe('UpdateDefaultHolidayComponent', () => {
  let component: UpdateDefaultHolidayComponent;
  let fixture: ComponentFixture<UpdateDefaultHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDefaultHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDefaultHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
