import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

import { UsercardComponent } from './usercard.component';
import {audioURL, avatarURL, baseURL, imageURL} from '../../../core/shared/baseurl';

describe('UsercardComponent', () => {
  let component: UsercardComponent;
  let fixture: ComponentFixture<UsercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercardComponent ],
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
    fixture = TestBed.createComponent(UsercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
