import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LessonComponent } from './lesson/lesson.component';
import { CourseComponent } from './course/course.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LessonListComponent } from './lesson/lesson-list/lesson-list.component';
import { LessonListDetailComponent } from './lesson/lesson-list-detail/lesson-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LessonComponent,
    CourseComponent,
    ProfileComponent,
    HomeComponent,
    LessonListComponent,
    LessonListDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
