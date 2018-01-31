import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../core/services/message.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LearningPathService} from '../../core/services/learning-path.service';

@Component({
  selector: 'app-learning-path-edit',
  templateUrl: './learning-path-edit.component.html',
  styleUrls: ['./learning-path-edit.component.scss']
})
export class LearningPathEditComponent implements OnInit {

  currentUser: any;
  learningPath: any;
  parentId: string;

  constructor(private cus: CurrentUserService,
              private lps: LearningPathService,
              private messageService: MessageService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    this.parentId = this.currentUser._id;
    const learningPathId = this.route.snapshot.params['learningPathId'];
    this.getLearningPath(learningPathId);
  }

  getLearningPath(learningPathId){
    return this.lps.getLearningPath(learningPathId)
      .subscribe(path => {
        this.learningPath = path;
      });
  }

}
