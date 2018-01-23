import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CurrentUserService} from '../../core/services/current-user.service';
import {LearningPathService} from '../../core/services/learning-path.service';
import {WordService} from '../../core/services/word.service';
import {WordDataModel} from '../../core/shared/worddatamodel';

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.scss']
})
export class TutorDashboardComponent implements OnInit {

  subscription: Subscription;
  currentUser: any;
  words: any;

  constructor(private currentUserService: CurrentUserService,
              private learningPath: LearningPathService,
              private wordService: WordService) { }

  ngOnInit() {
    // this.currentUser = this.currentUserService.currentUser;
    // this.wordService.getPurchasedWordsIds(this.currentUser._id)
    //   .subscribe(words => {
    //     this.words = words;
    //     console.log(this.words);
    //   });

  }

}
