import { Component, OnInit } from '@angular/core';
import {LessonService} from '../../shared/lesson.service';
import {Lesson} from '../../shared/lesson.model';
import {LessonItem} from '../../shared/lessonItem.model';

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
