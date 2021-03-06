import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LessonComponent} from './lesson/lesson.component';
import {LessonListDetailSingleComponent} from './lesson/lesson-list-detail-single/lesson-list-detail-single.component';
import {CourseComponent} from './course/course.component';
import {ProfileComponent} from './profile/profile.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth-guard.service';
import {LoginComponent} from './login/login.component';
import {LessonAddComponent} from './lesson/lesson-add/lesson-add.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lesson', canActivate: [AuthGuard], component: LessonComponent },
  { path: 'lesson/:id', component: LessonListDetailSingleComponent },
  { path: 'lesson/add', component: LessonAddComponent },
  { path: 'course', component: CourseComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
