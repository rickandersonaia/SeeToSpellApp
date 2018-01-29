import { Component, OnInit } from '@angular/core';
import {CurrentUserService} from '../../core/services/current-user.service';
import {LearningPathService} from '../../core/services/learning-path.service';

@Component({
  selector: 'app-learning-path-list',
  templateUrl: './learning-path-list.component.html',
  styleUrls: ['./learning-path-list.component.scss']
})
export class LearningPathListComponent implements OnInit {
  currentUser: any;
  learningPaths: any;
  parentId: string;

  constructor(private cus: CurrentUserService,
              private lps: LearningPathService) {
  }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    this.parentId = this.currentUser._id;
    this.getLearningPaths();
  }

  getLearningPaths() {
    return this.lps.getLearningPaths(this.parentId)
      .subscribe(paths => {
        this.learningPaths = paths;
        console.log(this.learningPaths);
        }
      );
  }

}
