import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmailTemplateComponent } from './viewemailtemplate.component';

describe('viewemailtemplate', () => {
  let component: ViewEmailTemplateComponent;
  let fixture: ComponentFixture<ViewEmailTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmailTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
