import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() chosenItemSecond = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {};

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

  onItemClickedSecond(itemNameSecond: Recipe) {
    this.chosenItemSecond.emit(itemNameSecond);
  }
}
