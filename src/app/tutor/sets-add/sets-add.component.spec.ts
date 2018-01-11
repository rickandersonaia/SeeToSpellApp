import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsAddComponent } from './sets-add.component';

describe('SetsAddComponent', () => {
  let component: SetsAddComponent;
  let fixture: ComponentFixture<SetsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
