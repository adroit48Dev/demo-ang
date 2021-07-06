import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestDetailsupdateComponent } from './interest-detailsupdate.component';

describe('InterestDetailsupdateComponent', () => {
  let component: InterestDetailsupdateComponent;
  let fixture: ComponentFixture<InterestDetailsupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestDetailsupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestDetailsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
