import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsPurchasedListComponent } from './words-purchased-list.component';

describe('WordsPurchasedListComponent', () => {
  let component: WordsPurchasedListComponent;
  let fixture: ComponentFixture<WordsPurchasedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsPurchasedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsPurchasedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
