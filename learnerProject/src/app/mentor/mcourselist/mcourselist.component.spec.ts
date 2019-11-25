import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McourselistComponent } from './mcourselist.component';

describe('McourselistComponent', () => {
  let component: McourselistComponent;
  let fixture: ComponentFixture<McourselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McourselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
