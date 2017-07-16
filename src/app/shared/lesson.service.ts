import {EventEmitter} from '@angular/core';
import {Lesson} from './lesson.model'

export class LessonService {
  lessonSelected = new EventEmitter<Lesson>();
  private lessons: Lesson[] = [
    new Lesson('Animals', 'This is a new animal lesson', 'Test'),
    new Lesson('Robots', 'This is a new robot lesson', 'Test')
  ];
  getLessons() {
    return this.lessons.slice();
  }
  getLessonsSelected() {
    return this.lessonSelected
  }
}
