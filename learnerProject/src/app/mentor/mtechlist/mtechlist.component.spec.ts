import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtechlistComponent } from './mtechlist.component';

describe('MtechlistComponent', () => {
  let component: MtechlistComponent;
  let fixture: ComponentFixture<MtechlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtechlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtechlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
