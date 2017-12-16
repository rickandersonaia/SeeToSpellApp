import { Component, OnInit } from '@angular/core';

import { WordDef } from '../shared/worddef';
import { WORDS } from '../shared/wordlist';
import { WordService } from '../services/word.service';
import { WordformComponent } from '../wordform/wordform.component';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  words = WORDS;
  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.words = this.wordService.getWords();
  }

}
