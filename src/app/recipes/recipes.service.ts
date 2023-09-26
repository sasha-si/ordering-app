import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // {
    //   id: 1,
    //   name: 'Pepperoni pizza',
    //   description: 'Big pepperoni pizza',
    //   imagePath: 'https://img.freepik.com/premium-photo/fresh-tasty-pizza-with-pepperoni-isolated-white_136401-2336.jpg',
    //   ingredients: [
    //     {name: 'Red pepper', amount: 15},
    //     {name: 'Pizza dough', amount: 150},
    //   ]
    // },
    // {
    //   id: 2,
    //   name: 'Four-cheese pizza',
    //   description: 'Big four-cheese pizza',
    //   imagePath: 'https://www.nicepng.com/png/detail/867-8672069_4-cheese-pizza-4-cheese-pizza-png.png',
    //   ingredients: [
    //     {name: 'Mozzarella cheese', amount: 50},
    //     {name: 'Cheese and cream sauce', amount: 120},
    //     {name: 'Pizza dough', amount: 150},
    //   ]
    // }
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  };

  setRecipes(recipesData: Recipe[]) {
    this.recipes = recipesData;
    this.recipesChanged.next(this.recipes.slice());
  };

  getRecipe(index: number) {
    return this.recipes.find((el) => el.id === index);
  };

  addRecipe(recipe: Recipe) {
    this.recipes.push({...recipe, id: this.recipes.length === 0 ? 1 : this.recipes[this.recipes.length - 1].id + 1});
    this.recipesChanged.next(this.recipes.slice());
  };
  
  updateRecipe(index: number, newRecipe: Recipe) {
    const recipeIndex = this.recipes.findIndex((el) => el.id === index);
    this.recipes[recipeIndex] = {...newRecipe, id: index};
    this.recipesChanged.next(this.recipes.slice());
  };

  deleteRecipe(index: number) {
    const recipeIndex = this.recipes.findIndex((el) => el.id === index);
    this.recipes.splice(recipeIndex, 1);
    this.recipesChanged.next(this.recipes.slice());
  };
}
