import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementserviceComponent } from './statementservice.component';

describe('StatementserviceComponent', () => {
  let component: StatementserviceComponent;
  let fixture: ComponentFixture<StatementserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
