import { Component, OnInit, Input } from '@angular/core';
import {LessonService} from '../../../shared/lesson.service';
import {LessonItem} from '../../../shared/lessonItem.model'

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.scss']
})
export class LessonItemComponent implements OnInit {
 @Input() thisLesson: {name: string, description: string, imagePath: string, lessonItems: LessonItem[]};
  constructor(private lessonService: LessonService) { }

  ngOnInit() {
  }

  onClick() {
    // console.log('Clicked yay!', this.thisLesson)
    this.lessonService.lessonSelected.emit(this.thisLesson);
  }
}
