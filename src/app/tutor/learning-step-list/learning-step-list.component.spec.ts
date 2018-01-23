import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningStepListComponent } from './learning-step-list.component';

describe('LearningStepListComponent', () => {
  let component: LearningStepListComponent;
  let fixture: ComponentFixture<LearningStepListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningStepListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningStepListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
