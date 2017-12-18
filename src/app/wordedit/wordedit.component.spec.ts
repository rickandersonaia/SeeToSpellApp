import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordeditComponent } from './wordedit.component';

describe('WordeditComponent', () => {
  let component: WordeditComponent;
  let fixture: ComponentFixture<WordeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
