import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeroleComponent } from './update-employeerole.component';

describe('UpdateEmployeeroleComponent', () => {
  let component: UpdateEmployeeroleComponent;
  let fixture: ComponentFixture<UpdateEmployeeroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
