import {Component, OnInit, OnDestroy} from '@angular/core';
import {MessageService} from '../../core/services/message.service';
import {CurrentUserService} from '../../core/services/current-user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LearningPathService} from '../../core/services/learning-path.service';
import {DragulaService} from 'ng2-dragula';

@Component({
  selector: 'app-learning-path-edit',
  templateUrl: './learning-path-edit.component.html',
  styleUrls: ['./learning-path-edit.component.scss']
})
export class LearningPathEditComponent implements OnInit, OnDestroy {

  currentUser: any;
  learningPath: any;
  parentId: string;

  constructor(private cus: CurrentUserService,
              private lps: LearningPathService,
              private messageService: MessageService,
              private router: Router,
              private route: ActivatedRoute,
              private dragulaService: DragulaService) {

    this.dragulaService.setOptions('step-bag', {
      moves: function (el, container, handle) {
        return handle.className === 'handle';
      }
    });


    this.dragulaService.dropModel
      .subscribe((value) => {
        // console.log(`drag: ${value[0]}`);
        this.onDropModel(value.slice(1));
        // console.log(value);
      });


    this.dragulaService.drop
      .subscribe((value) => {
        // console.log(`drag: ${value[0]}`);
        this.onDrop(value.slice(1));
        // console.log(value);
      });
  }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    this.parentId = this.currentUser._id;
    const learningPathId = this.route.snapshot.params['learningPathId'];
    this.getLearningPath(learningPathId);
  }

  private onDrop(args) {
    let [e, el] = args;
    const wordId = e.getAttribute('data-wordid');
    const sourceStepId = e.getAttribute('data-origstepid');
    const targetStepId = el.getAttribute('data-stepid');

    // // Step 1, find the word in the original learning step and delete it.
    // for (let index = 0; index < this.learningPath.learningSteps.length; index++) {
    //   const learningStep = this.learningPath.learningSteps[index];
    //   if (learningStep._id === sourceStepId) {
    //     for (let windex = 0; windex < learningStep.words.length; windex++) {
    //       if (learningStep.words[windex]._id = wordId) {
    //         const word = learningStep.words[windex];
    //         const deleteIndex = windex;
    //         break;
    //       }
    //     }
    //     this.learningPath.learningSteps[index].words.splice(deleteIndex, 1);
    //     // console.log('source', this.learningPath.learningSteps[index]);
    //   }
    // }
    //
    // // Step 2, find the target learning step & add the word to it
    // for (let index = 0; index < this.learningPath.learningSteps.length; index++) {
    //   const learningStep = this.learningPath.learningSteps[index];
    //   if (learningStep._id === targetStepId) {
    //     this.learningPath.learningSteps[index].words.push(word);
    //     // console.log('target', this.learningPath.learningSteps[index]);
    //   }
    // }

    console.log(this.learningPath);
    // console.log(wordId, sourceStepId, targetStepId);
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    // console.log(el, target, source);
    for (let index = 0; index < this.learningPath.learningSteps.length; index++) {
      const step = index + 1;
      this.learningPath.learningSteps[index].stepName = 'Step ' + step;
    }
  }

  getLearningPath(learningPathId) {
    return this.lps.getLearningPath(learningPathId)
      .subscribe(path => {
        this.learningPath = path;
      });
  }

  onSave() {
    const learningPathId = this.route.snapshot.params['learningPathId'];
    return this.lps.updateLearningPath(this.learningPath, learningPathId)
      .subscribe(path => {
          this.learningPath = path;
          this.messageService.sendMessage('Your edits have been saved');
        },
        error => {
          this.messageService.sendMessage('There was a problem saving your changes');
        });
  }

  ngOnDestroy() {
    this.dragulaService.destroy('step-bag');
    this.learningPath = {};
  }

}
