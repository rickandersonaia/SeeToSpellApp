import { Component, OnInit, Inject } from '@angular/core';
import {StudentDataModel} from '../../core/shared/studentdatamodel';
import {CurrentUserService} from '../../core/services/current-user.service';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../core/services/student.service';

@Component({
  selector: 'app-tutor-dashboard-stats',
  templateUrl: './tutor-dashboard-stats.component.html',
  styleUrls: ['./tutor-dashboard-stats.component.scss']
})
export class TutorDashboardStatsComponent implements OnInit {

  students: StudentDataModel[];
  currentUser: any;
  parentId: string;

  constructor(private studentService: StudentService,
              private cus: CurrentUserService,
              private route: ActivatedRoute,
              @Inject('BaseURL') private BaseURL,
              @Inject('AvatarURL') private AvatarURL) { }

  ngOnInit() {
    this.currentUser = this.cus.currentUser;
    this.parentId = this.currentUser._id;
    this.studentService.getStudentsByParentId(this.parentId)
      .subscribe(students => {
        this.students = students;
      });
  }

}
