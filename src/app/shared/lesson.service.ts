import {EventEmitter} from '@angular/core';
import {Lesson} from './lesson.model'
import {Subject} from 'rxjs/Subject';

export class LessonService {
  lessonSelected = new Subject<Lesson>();
  lessonSelectedStatic;
  lessonsChanged = new Subject<Lesson[]>();
  private lessons: Lesson[] = [];
  lessonCDN = [];

  addLesson(newLesson) {
    this.lessons.push(newLesson);
    this.lessonsChanged.next(this.lessons.slice())
  }

  addCDN(Obj) {
    this.lessonCDN.push(Obj);
  }

  getSelected() {
    return this.lessonSelectedStatic;
  }
}



//   getRecipes() {
//     return this.recipes.slice();
//   }
//
//   getRecipe(index: number) {
//     return this.recipes[index];
//   }
//
//   addIngredientsToShoppingList(ingredients: Ingredient[]) {
//     this.slService.addIngredients(ingredients);
//   }
//
//   addRecipe(recipe: Recipe) {
//     this.recipes.push(recipe);
//     this.recipesChanged.next(this.recipes.slice());
//   }
//
//   updateRecipe(index: number, newRecipe: Recipe) {
//     this.recipes[index] = newRecipe;
//     this.recipesChanged.next(this.recipes.slice());
//   }
//
//   deleteRecipe(index: number) {
//     this.recipes.splice(index, 1);
//     this.recipesChanged.next(this.recipes.slice());
//   }


