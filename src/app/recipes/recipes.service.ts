import { Injectable } from '@angular/core';

import { Recipe } from './recipe.interface';
import { Ingredient } from '../shared/ingredient.interface';

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
        {name: 'Red pepper', amount: 15},
        {name: 'Pizza dough', amount: 150},
      ]
    },
    {
      id: 2,
      name: 'Four-cheese pizza',
      description: 'Big four-cheese pizza',
      imagePath: 'https://www.nicepng.com/png/detail/867-8672069_4-cheese-pizza-4-cheese-pizza-png.png',
      ingredients: [
        {name: 'Mozzarella cheese', amount: 50},
        {name: 'Cheese and cream sauce', amount: 120},
        {name: 'Pizza dough', amount: 150},
      ]
    }
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  };
}
