import {Component, OnInit} from '@angular/core';

import {WordDef} from '../shared/worddef';
import {WordService} from '../services/word.service';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-worddetail',
  templateUrl: './worddetail.component.html',
  styleUrls: ['./worddetail.component.scss']
})
export class WorddetailComponent implements OnInit {

  word: WordDef;

  constructor(private wordService: WordService,
              private location: Location,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    this.word = this.wordService.getWord(name);
  }

  goBack(): void {
    this.location.back();
  }

}
