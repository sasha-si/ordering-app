import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.interface';
import { map, tap } from 'rxjs';

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
    return this.http.get<Recipe[]>('https://ordering-app-e5a5a-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
          })
        }),
        tap(recipes => {
          this.recipesService.setRecipes(recipes);
        })
      )
  };
}
