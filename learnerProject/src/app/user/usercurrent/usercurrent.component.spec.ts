import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercurrentComponent } from './usercurrent.component';

describe('UsercurrentComponent', () => {
  let component: UsercurrentComponent;
  let fixture: ComponentFixture<UsercurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
