import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import {LessonService} from '../shared/lesson.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent {

  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService, private lessonService: LessonService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }

  addToLesson(result) {
    this.lessonService.addCDN(result);
    console.log('Search result: ', this.lessonService.lessonCDN);
  }

}
