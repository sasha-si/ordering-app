import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pepperoni pizza',
      'Big pepperoni pizza',
      'https://img.freepik.com/premium-photo/fresh-tasty-pizza-with-pepperoni-isolated-white_136401-2336.jpg',
      [
        new Ingredient('Red pepper', 15),
        new Ingredient('Pizza dough', 150)
      ]
    ),
    new Recipe(
      'Four-cheese pizza',
      'Big four-cheese pizza',
      'https://www.nicepng.com/png/detail/867-8672069_4-cheese-pizza-4-cheese-pizza-png.png',
      [
        new Ingredient('Mozzarella cheese', 50),
        new Ingredient('Cheese and cream sauce', 120),
        new Ingredient('Pizza dough', 150)
      ]
    ),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  };
}
