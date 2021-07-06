import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserDocumentComponent } from './view-user-document.component';

describe('ViewUserDocumentComponent', () => {
  let component: ViewUserDocumentComponent;
  let fixture: ComponentFixture<ViewUserDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
