import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDetailsComponent } from './due-details.component';

describe('DueDetailsComponent', () => {
  let component: DueDetailsComponent;
  let fixture: ComponentFixture<DueDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
