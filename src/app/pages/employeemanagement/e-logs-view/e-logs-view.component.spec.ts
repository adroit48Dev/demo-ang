import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELogsViewComponent } from './e-logs-view.component';

describe('ELogsViewComponent', () => {
  let component: ELogsViewComponent;
  let fixture: ComponentFixture<ELogsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELogsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELogsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
