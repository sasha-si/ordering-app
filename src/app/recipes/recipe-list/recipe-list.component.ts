import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  @Output() chosenItemSecond = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('Pepperoni pizza', 'Big pepperoni pizza', 'https://img.freepik.com/premium-photo/fresh-tasty-pizza-with-pepperoni-isolated-white_136401-2336.jpg'),
    new Recipe('Four-cheese pizza', 'Big four-cheese pizza', 'https://www.nicepng.com/png/detail/867-8672069_4-cheese-pizza-4-cheese-pizza-png.png'),
  ];

  onItemClickedSecond(itemNameSecond: Recipe) {
    this.chosenItemSecond.emit(itemNameSecond);
  }
}
