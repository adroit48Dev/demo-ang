import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransPrintpageComponent } from './trans-printpage.component';

describe('TransPrintpageComponent', () => {
  let component: TransPrintpageComponent;
  let fixture: ComponentFixture<TransPrintpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransPrintpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransPrintpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
