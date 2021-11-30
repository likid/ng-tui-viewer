import { waitForAsync } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTuiViewerComponent } from './ng-tui-viewer.component';

describe('NgTuiViewerComponent', () => {
  let component: NgTuiViewerComponent;
  let fixture: ComponentFixture<NgTuiViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTuiViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTuiViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
