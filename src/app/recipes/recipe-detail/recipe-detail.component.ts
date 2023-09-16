import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.interface';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  elId!: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) { };

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.elId = +params['id'];
        this.recipe = this.recipesService.getRecipes()[params['id'] - 1]
        // this.recipe = this.recipesService.getRecipe(params['id']) To enhance
      }
    );
  }

  onAddToShopList() {
    this.shoppingListService.addIngredientsList(this.recipe.ingredients);
  };

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.elId);
    this.router.navigate(['/recipes']);
  };
}
