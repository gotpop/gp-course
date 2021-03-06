import { Component, OnInit, Input } from '@angular/core';
import {LessonService} from '../../../shared/lesson.service';
import {LessonItem} from '../../../shared/lessonItem.model'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.scss']
})
export class LessonItemComponent implements OnInit {
 @Input() thisLesson: {name: string, description: string, imagePath: string, lessonItems: LessonItem[]};
  constructor(
    private lessonService: LessonService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onViewLocal() {
    /* Reactive approach */
    this.lessonService.lessonSelected.next(this.thisLesson);
  }

  onViewSingle() {
    /* Static approach */
    this.lessonService.lessonSelectedStatic = this.thisLesson;
    this.router.navigate([this.thisLesson.name], {relativeTo: this.route} )
  }
}
