import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 1005),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients;
  };

  addIngredient(newItem: Ingredient) {
    this.ingredients.push(newItem);
  };

  addIngredientsList(newItems: Ingredient[]) {
    this.ingredients.push( ...newItems);
  };
}
