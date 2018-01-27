import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordcardComponent } from './wordcard.component';
import {audioURL, avatarURL, baseURL, imageURL} from '../../../core/shared/baseurl';
import {MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('WordcardComponent', () => {
  let component: WordcardComponent;
  let fixture: ComponentFixture<WordcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordcardComponent ],
      imports: [MatCardModule, RouterTestingModule, MatProgressSpinnerModule],
      providers: [
        {provide: 'BaseURL', useValue: baseURL},
        {provide: 'ImageURL', useValue: imageURL},
        {provide: 'AudioURL', useValue: audioURL},
        {provide: 'AvatarURL', useValue: avatarURL}
      ]
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
