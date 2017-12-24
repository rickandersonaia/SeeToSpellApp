import {Component, Inject, OnInit} from '@angular/core';

import { WordDataModel } from '../../shared/worddatamodel';
import { WordService } from '../../services/word.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  words: WordDataModel[];

  constructor(private wordService: WordService,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL) { }

  ngOnInit() {
    this.wordService.getWords()
      .subscribe(words => this.words = words);
  }

}
