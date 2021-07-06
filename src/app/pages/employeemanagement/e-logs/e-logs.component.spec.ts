import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELogsComponent } from './e-logs.component';

describe('ELogsComponent', () => {
  let component: ELogsComponent;
  let fixture: ComponentFixture<ELogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
