import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpDocumentComponent } from './view-emp-document.component';

describe('ViewEmpDocumentComponent', () => {
  let component: ViewEmpDocumentComponent;
  let fixture: ComponentFixture<ViewEmpDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
