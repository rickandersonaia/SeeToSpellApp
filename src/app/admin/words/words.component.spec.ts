import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsComponent } from './words.component';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {audioURL, avatarURL, baseURL, imageURL} from '../../core/shared/baseurl';
import {Location} from '@angular/common';
import {WordService} from '../../core/services/word.service';
import {Observable} from 'rxjs/Observable';

describe('WordsComponent', () => {
  let component: WordsComponent;
  let fixture: ComponentFixture<WordsComponent>;
  let mockWordService: any;
  let mockLocation: any;
  let mockRouter: any;
  let mockActivatedRoute: any;

  beforeEach(async(() => {
    mockWordService = {
      getWordById: jasmine.createSpy('getWordById').and.returnValue(Observable.of({})),
      editWord: jasmine.createSpy('editWord').and.returnValue(Observable.of({})),
      deleteWord: jasmine.createSpy('deleteWord').and.returnValue(Observable.of({})),
    };

    mockLocation = {
      back: jasmine.createSpy('back')
    };

    mockRouter = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    mockActivatedRoute = {
      snapshot: {
        params: { id: 'testid'}
      }
    };

    TestBed.configureTestingModule({
      declarations: [ WordsComponent ],
      imports: [RouterModule, MatListModule],
      providers: [
        {provide: WordService, useValue: mockWordService},
        {provide: Location, useValue: mockLocation},
        {provide: Router, useValue: mockRouter},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: 'BaseURL', useValue: baseURL},
        {provide: 'ImageURL', useValue: imageURL},
        {provide: 'AudioURL', useValue: audioURL},
        {provide: 'AvatarURL', useValue: avatarURL}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
