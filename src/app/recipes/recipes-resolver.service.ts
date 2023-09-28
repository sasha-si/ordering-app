import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.interface';
import { DataStorageService } from '../shared/data-storage.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class RecipesResolverService implements Resolve<Recipe[]> {

//   constructor(private dataStorageService: DataStorageService) { }

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     return this.dataStorageService.fetchRecipes();
//   };

// }

export const RecipesResolverService:  ResolveFn<Recipe[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    return inject(DataStorageService).fetchRecipes();
  };

// resolve: {'user': () => inject(UserResolver).resolve()}