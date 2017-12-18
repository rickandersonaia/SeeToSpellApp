import { Component, OnInit, Inject } from '@angular/core';

import {WordDataModel} from '../shared/worddatamodel';
import {WordService} from '../services/word.service';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-wordedit',
  templateUrl: './wordedit.component.html',
  styleUrls: ['./wordedit.component.scss']
})
export class WordeditComponent implements OnInit {

  word: WordDataModel;

  constructor(private wordService: WordService,
              private location: Location,
              private route: ActivatedRoute,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL) {
  }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];

    this.wordService.getWordById(id)
      .subscribe(word => this.word = word);
  }

  goBack(): void {
    this.location.back();
  }

}
