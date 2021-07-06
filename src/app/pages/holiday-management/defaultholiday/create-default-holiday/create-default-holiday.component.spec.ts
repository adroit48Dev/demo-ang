import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDefaultHolidayComponent } from './create-default-holiday.component';

describe('CreateDefaultHolidayComponent', () => {
  let component: CreateDefaultHolidayComponent;
  let fixture: ComponentFixture<CreateDefaultHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDefaultHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDefaultHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
