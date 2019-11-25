import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorpageComponent } from './mentorpage.component';

describe('MentorpageComponent', () => {
  let component: MentorpageComponent;
  let fixture: ComponentFixture<MentorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
