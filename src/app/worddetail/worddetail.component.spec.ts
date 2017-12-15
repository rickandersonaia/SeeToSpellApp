import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorddetailComponent } from './worddetail.component';

describe('WorddetailComponent', () => {
  let component: WorddetailComponent;
  let fixture: ComponentFixture<WorddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
