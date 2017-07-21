import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../shared/lesson.service';


@Component({
  selector: 'app-lesson-list-detail-single',
  templateUrl: './lesson-list-detail-single.component.html',
  styleUrls: ['./lesson-list-detail-single.component.scss']
})

export class LessonListDetailSingleComponent implements OnInit {

  thisLesson;
  constructor(private lessonService: LessonService) {}

  ngOnInit() {
   this.thisLesson = this.lessonService.getSelected()
  }

}
