import {Component, Inject, OnInit} from '@angular/core';
import {CurrentUserService} from '../../core/services/current-user.service';
import {LearningPathService} from '../../core/services/learning-path.service';
import {WordService} from '../../core/services/word.service';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.scss']
})
export class WordsListComponent implements OnInit {

  currentUser: any;
  words: any;

  constructor(private currentUserService: CurrentUserService,
              private learningPath: LearningPathService,
              private wordService: WordService,
              @Inject('BaseURL') private BaseURL,
              @Inject('ImageURL') private ImageURL,
              @Inject('AudioURL') private AudioURL) { }

  ngOnInit() {
    this.currentUser = this.currentUserService.currentUser;
    this.wordService.getPurchasedWords(this.currentUser._id)
      .subscribe(words => {
        this.words = words;
        console.log(this.words);
      });
  }
}
