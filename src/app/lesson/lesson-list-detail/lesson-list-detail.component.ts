import { Component, OnInit } from '@angular/core';
import {LessonItem} from '../../shared/lessonItem.model';
import {LessonService} from '../../shared/lesson.service';
import {Lesson} from '../../shared/lesson.model';

@Component({
  selector: 'app-lesson-list-detail',
  templateUrl: './lesson-list-detail.component.html',
  styleUrls: ['./lesson-list-detail.component.scss']
})
export class LessonListDetailComponent implements OnInit {
  lessonItems: LessonItem[] = [
    new LessonItem('Funny youtube video', 'This is a funny video', 'path'),
    new LessonItem('Info graphic', 'This is a chart', 'path')
  ];
  thisLesson = {}
  constructor(private lessonService: LessonService) {}

  ngOnInit() {
    this.lessonService.lessonSelected.subscribe(
      ( maLesson: Lesson ) => {
        this.thisLesson = maLesson
        console.log('This is this lesson: ', this.thisLesson)
      }
    )


    // this.lessonService

    // this.thisLesson = this.lessonService.lessonSelected;

  }

}
