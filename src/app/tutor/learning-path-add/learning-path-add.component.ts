import { Component, OnInit } from '@angular/core';
import {WordService} from '../../core/services/word.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {LearningPathService} from '../../core/services/learning-path.service';

@Component({
  selector: 'app-learning-path-add',
  templateUrl: './learning-path-add.component.html',
  styleUrls: ['./learning-path-add.component.scss']
})
export class LearningPathAddComponent implements OnInit {
  currentUser: any;
  purchasedWords: any;
  learningPathArray: any;

  constructor(private wordService: WordService,
              private cus: CurrentUserService,
              private lps: LearningPathService) { }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    this.wordService.getPurchasedWords(this.currentUser._id)
      .subscribe(words => {
        this.purchasedWords = words;
        this.learningPathArray = this.lps.createDefaultLearningPath(words);
        console.log(this.learningPathArray);
      } );
  }

}
