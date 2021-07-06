import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBankerDocumentComponent } from './view-banker-document.component';

describe('ViewBankerDocumentComponent', () => {
  let component: ViewBankerDocumentComponent;
  let fixture: ComponentFixture<ViewBankerDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBankerDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBankerDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
