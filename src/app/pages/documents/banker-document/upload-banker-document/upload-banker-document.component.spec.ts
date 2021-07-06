import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBankerDocumentComponent } from './upload-banker-document.component';

describe('UploadBankerDocumentComponent', () => {
  let component: UploadBankerDocumentComponent;
  let fixture: ComponentFixture<UploadBankerDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBankerDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBankerDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
