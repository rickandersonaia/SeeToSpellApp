import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorRoutingComponent } from './tutor-routing.component';

describe('TutorRoutingComponent', () => {
  let component: TutorRoutingComponent;
  let fixture: ComponentFixture<TutorRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
