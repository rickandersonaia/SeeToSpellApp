import {Component, OnInit, Inject} from '@angular/core';

import {WordDataModel} from '../shared/worddatamodel';
import {WordService} from '../services/word.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  freewords: WordDataModel[];

  constructor(private wordservice: WordService,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL) {
  }

  ngOnInit() {
    this.wordservice.getFreeWords()
      .subscribe(freewords => this.freewords = freewords);
  }

}
