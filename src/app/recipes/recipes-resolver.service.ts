import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

import { Recipe } from './recipe.interface';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipesService } from './recipes.service';

export const RecipesResolverService:  ResolveFn<Recipe[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const recipes = inject(RecipesService).getRecipes();

    if(recipes.length === 0) {
      return inject(DataStorageService).fetchRecipes();
    } else {
      return recipes;
    }
  };