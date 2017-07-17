import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LessonComponent } from './lesson/lesson.component';
import { CourseComponent } from './course/course.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LessonListComponent } from './lesson/lesson-list/lesson-list.component';
import { LessonListDetailComponent } from './lesson/lesson-list-detail/lesson-list-detail.component';
import { LessonItemComponent } from './lesson/lesson-list/lesson-item/lesson-item.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import {LessonService} from './shared/lesson.service';
import { LessonListDetailSingleComponent } from './lesson/lesson-list-detail-single/lesson-list-detail-single.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { LessonEditComponent } from './lesson/lesson-edit/lesson-edit.component';

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
    LessonListDetailComponent,
    LessonItemComponent,
    CourseEditComponent,
    LessonListDetailSingleComponent,
    PageNotFoundComponent,
    LessonEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LessonService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
