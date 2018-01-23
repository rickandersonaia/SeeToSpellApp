import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningStepEditComponent } from './learning-step-edit.component';

describe('LearningStepEditComponent', () => {
  let component: LearningStepEditComponent;
  let fixture: ComponentFixture<LearningStepEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningStepEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningStepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
