import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordeditComponent } from './wordedit.component';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {Location} from '@angular/common';
import {
  MatCardModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {WordService} from '../../core/services/word.service';
import {audioURL, avatarURL, baseURL, imageURL} from '../../core/shared/baseurl';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WordcardComponent} from '../../shared-views/content-components/wordcard/wordcard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('WordeditComponent', () => {
  let component: WordeditComponent;
  let fixture: ComponentFixture<WordeditComponent>;
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
      declarations: [ WordeditComponent, WordcardComponent ],
      imports: [MatCardModule, MatProgressSpinnerModule, RouterModule, FormsModule, ReactiveFormsModule,
        MatFormFieldModule, MatSelectModule, MatSlideToggleModule, MatInputModule, BrowserAnimationsModule],
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
    fixture = TestBed.createComponent(WordeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
