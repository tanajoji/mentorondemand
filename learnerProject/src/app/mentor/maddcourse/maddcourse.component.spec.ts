import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaddcourseComponent } from './maddcourse.component';

describe('MaddcourseComponent', () => {
  let component: MaddcourseComponent;
  let fixture: ComponentFixture<MaddcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaddcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaddcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
