import { Injectable } from '@angular/core';

import { Recipe } from './recipe.interface';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Pepperoni pizza',
      description: 'Big pepperoni pizza',
      imagePath: 'https://img.freepik.com/premium-photo/fresh-tasty-pizza-with-pepperoni-isolated-white_136401-2336.jpg',
      ingredients: [
        new Ingredient('Red pepper', 15),
        new Ingredient('Pizza dough', 150)
      ]
    },
    {
      id: 2,
      name: 'Four-cheese pizza',
      description: 'Big four-cheese pizza',
      imagePath: 'https://www.nicepng.com/png/detail/867-8672069_4-cheese-pizza-4-cheese-pizza-png.png',
      ingredients: [
        new Ingredient('Mozzarella cheese', 50),
        new Ingredient('Cheese and cream sauce', 120),
        new Ingredient('Pizza dough', 150)
      ]
    }
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  };
}
