import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipesService } from '../recipes/recipes.service';

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
    ).subscribe(res => {
      console.log(res);
    });
  }
}
