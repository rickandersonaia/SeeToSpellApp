import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordcardComponent } from './wordcard.component';

describe('WordcardComponent', () => {
  let component: WordcardComponent;
  let fixture: ComponentFixture<WordcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
