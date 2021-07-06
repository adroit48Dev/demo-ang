import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESalaryComponent } from './e-salary.component';

describe('ESalaryComponent', () => {
  let component: ESalaryComponent;
  let fixture: ComponentFixture<ESalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
