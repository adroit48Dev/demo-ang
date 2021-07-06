import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpecialHolidayComponent } from './create-special-holiday.component';

describe('CreateSpecialHolidayComponent', () => {
  let component: CreateSpecialHolidayComponent;
  let fixture: ComponentFixture<CreateSpecialHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpecialHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpecialHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
