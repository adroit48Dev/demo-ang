import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeDetailsupdateComponent } from './fee-detailsupdate.component';

describe('FeeDetailsupdateComponent', () => {
  let component: FeeDetailsupdateComponent;
  let fixture: ComponentFixture<FeeDetailsupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeDetailsupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeDetailsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
