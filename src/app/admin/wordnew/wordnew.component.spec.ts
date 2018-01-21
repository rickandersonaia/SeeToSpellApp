import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordnewComponent } from './wordnew.component';

describe('WordnewComponent', () => {
  let component: WordnewComponent;
  let fixture: ComponentFixture<WordnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
