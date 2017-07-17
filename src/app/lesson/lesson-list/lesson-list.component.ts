import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../shared/lesson.model';
import {LessonService} from '../../shared/lesson.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {
  lessons: Lesson[];
  showEdit = false;
  constructor(private lessonService: LessonService) {
  }

  ngOnInit() {
    // this.lessons = this.lessonService.getLessons();
    this.lessonService.lessonsChanged.subscribe(
      (lessons: Lesson[]) => {
        this.lessons = lessons;
      }
    );
  }

  addNewLesson() {
    this.showEdit = true;
    // this.lessons.push(new Lesson('Animals', 'This is a new animal lesson', 'Test'))
  }
}
