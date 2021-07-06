import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailServiceDialogComponent } from './email-service-dialog.component';

describe('EmailServiceDialogComponent', () => {
  let component: EmailServiceDialogComponent;
  let fixture: ComponentFixture<EmailServiceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailServiceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailServiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
