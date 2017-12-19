import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewwordComponent } from './wordnew.component';

describe('NewwordComponent', () => {
  let component: NewwordComponent;
  let fixture: ComponentFixture<NewwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
