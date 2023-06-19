import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe('Pepperoni pizza', 'Big pepperoni pizza', 'https://img.freepik.com/premium-photo/fresh-tasty-pizza-with-pepperoni-isolated-white_136401-2336.jpg'),
    new Recipe('Four-cheese pizza', 'Big four-cheese pizza', 'https://www.nicepng.com/png/detail/867-8672069_4-cheese-pizza-4-cheese-pizza-png.png'),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  };
}
