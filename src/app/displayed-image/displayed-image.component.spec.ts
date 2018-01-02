import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DisplayedImageComponent} from './displayed-image.component';

describe('DisplayedImageComponent', () => {
  let component: DisplayedImageComponent;
  let fixture: ComponentFixture<DisplayedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
