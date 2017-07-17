import {EventEmitter} from '@angular/core';
import {Lesson} from './lesson.model'
import {LessonItem} from './lessonItem.model';

export class LessonService {
  lessonSelected = new EventEmitter<Lesson>();
  private lessons: Lesson[] = [
    new Lesson(
      'Animals',
      'This is a new animal lesson',
      'Test', [
        new LessonItem('Cat video', 'A video showing cats', 'Test'),
        new LessonItem('Dog video', 'A video showing dogs', 'Test')
      ]),
    new Lesson(
      'Geography',
      'This is a geography lesson',
      'Test',
      [
        new LessonItem('French video', 'A video showing france', 'Test'),
        new LessonItem('Italy video', 'A video showing Italy', 'Test')
      ])
  ];
  getLessons() {
    return this.lessons.slice();
  }
  addLesson(newLesson) {
    this.lessons.push(newLesson);
    // return this.lessons.slice();
  }
  getLessonsSelected() {
    return this.lessonSelected
  }
}
