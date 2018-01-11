import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorUsereditComponent } from './tutor-useredit.component';

describe('TutorUsereditComponent', () => {
  let component: TutorUsereditComponent;
  let fixture: ComponentFixture<TutorUsereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorUsereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorUsereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
