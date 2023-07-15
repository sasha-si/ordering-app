import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    {name: 'Apples', amount: 1005},
    {name: 'Tomatoes', amount: 10},
    {name: 'Beer', amount: 12}
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients;
  };

  addIngredient(newItem: Ingredient) {
    this.ingredients.push(newItem);
  };

  editIngredient(newItem: Ingredient, index: number) {
    this.ingredients[index] = newItem;
  };

  addIngredientsList(newItems: Ingredient[]) {
    this.ingredients.push( ...newItems);
  };
}
