import { Component, OnInit, Input } from '@angular/core';
import {LessonService} from '../../../shared/lesson.service';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.scss']
})
export class LessonItemComponent implements OnInit {
 @Input() thisLesson: {name: string, description: string, imagePath: string};
  constructor(private lessonService: LessonService) { }

  ngOnInit() {
  }

  onClick() {
    console.log('Clciked yay!')
    this.lessonService.lessonSelected.emit(this.thisLesson);
  }
}
