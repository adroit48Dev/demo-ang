import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountinterestComponent } from './user-accountinterest.component';

describe('UserAccountinterestComponent', () => {
  let component: UserAccountinterestComponent;
  let fixture: ComponentFixture<UserAccountinterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountinterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
