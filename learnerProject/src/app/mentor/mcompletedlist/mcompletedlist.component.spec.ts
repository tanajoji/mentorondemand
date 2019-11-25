import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McompletedlistComponent } from './mcompletedlist.component';

describe('McompletedlistComponent', () => {
  let component: McompletedlistComponent;
  let fixture: ComponentFixture<McompletedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McompletedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McompletedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
