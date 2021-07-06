import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatecreationComponent } from './templatecreation.component';

describe('TemplatecreationComponent', () => {
  let component: TemplatecreationComponent;
  let fixture: ComponentFixture<TemplatecreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatecreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
