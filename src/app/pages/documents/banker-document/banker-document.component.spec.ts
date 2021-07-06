import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerDocumentComponent } from './banker-document.component';

describe('BankerDocumentComponent', () => {
  let component: BankerDocumentComponent;
  let fixture: ComponentFixture<BankerDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankerDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankerDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
