import { Component } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {};

  pullData(name: string, amount: number) {
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  };
}
