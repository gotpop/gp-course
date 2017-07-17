import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Lesson} from 'app/shared/lesson.model';
import {LessonService} from '../../shared/lesson.service';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.scss']
})
export class LessonEditComponent implements OnInit {

  constructor(private lessonService: LessonService) { }

  ngOnInit() {
  }

  addLesson(form: NgForm) {
    const value = form.value;
    const newLesson = new Lesson(value.name, value.description, 'Test', []);
    this.lessonService.addLesson(newLesson);
  }
}
