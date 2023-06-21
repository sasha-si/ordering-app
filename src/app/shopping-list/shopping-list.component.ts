import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {};

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  addNewItem(newItem: Ingredient) {
    this.ingredients.push(newItem);
  };
}
