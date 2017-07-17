import {EventEmitter} from '@angular/core';
import {Lesson} from './lesson.model'
import {LessonItem} from './lessonItem.model';
import {Subject} from 'rxjs/Subject';

export class LessonService {
  lessonSelected = new EventEmitter<Lesson>();
  lessonsChanged = new Subject<Lesson[]>();
  private lessons: Lesson[] = [
    new Lesson(
      'Animals',
      'This is a new animal lesson',
      'Test', [
        new LessonItem('Cat video', 'A video showing cats', 'Test'),
        new LessonItem('Dog video', 'A video showing dogs', 'Test')
      ])
  ];
  getLessons() {
    return this.lessons.slice();
  }
  addLesson(newLesson) {
    this.lessons.push(newLesson);
    this.lessonsChanged.next(this.lessons.slice())
  }
}



// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
//
// import { Recipe } from './recipe.model';
// import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';
//
// @Injectable()
// export class RecipeService {
//   recipesChanged = new Subject<Recipe[]>();
//
//   private recipes: Recipe[] = [
//     new Recipe(
//       'Tasty Schnitzel',
//       'A super-tasty Schnitzel - just awesome!',
//       'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
//       [
//         new Ingredient('Meat', 1),
//         new Ingredient('French Fries', 20)
//       ]),
//     new Recipe('Big Fat Burger',
//       'What else you need to say?',
//       'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//       [
//         new Ingredient('Buns', 2),
//         new Ingredient('Meat', 1)
//       ])
//   ];
//
//   constructor(private slService: ShoppingListService) {}
//
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
// }


