import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersinfoComponent } from './usersinfo.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UsersinfoComponent', () => {
  let component: UsersinfoComponent;
  let fixture: ComponentFixture<UsersinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersinfoComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
