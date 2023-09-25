import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipesService: RecipesService
  ) { }

  saveRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put(
      'https://ordering-app-e5a5a-default-rtdb.firebaseio.com/recipes.json',
      recipes
    )
    .subscribe(res => {
      console.log(res);
    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://ordering-app-e5a5a-default-rtdb.firebaseio.com/recipes.json')
    .subscribe(recipes => {
      this.recipesService.setRecipes(recipes);
    });
  };
}
