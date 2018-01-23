import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningStepAddComponent } from './learning-step-add.component';

describe('LearningStepAddComponent', () => {
  let component: LearningStepAddComponent;
  let fixture: ComponentFixture<LearningStepAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningStepAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningStepAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
