import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipesService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.interface';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  isEditingMode = false;
  form!: FormGroup;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { };

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        params['id'] === undefined ? this.isEditingMode = false : this.isEditingMode = true;
      }
    );
    this.initForm();
  }

  private initForm() {
    let name = null;
    let imagePath = null;
    let description = null;
    let ingredients: Ingredient[] = [];

    if (this.isEditingMode) {
      const recipe = this.recipesService.getRecipe(this.id)!;
      name = recipe.name
      imagePath = recipe.imagePath
      description = recipe.description
      ingredients = recipe.ingredients
    }
    this.form = this.fb.group({
      'name': [name, [Validators.required, Validators.minLength(3)]],
      'imagePath': [imagePath, [Validators.required, Validators.minLength(15)]],
      'description': [description, [Validators.required, Validators.minLength(10)]],
      'ingredients': this.fb.array(
        ingredients.map((i: Ingredient) => {          
          return this.fb.group({
            'name': [i.name, [Validators.required, Validators.minLength(3)]],
            'amount': [i.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/), Validators.minLength(3)]]
          })
        })
      ),
    });
  };

  onSubmit() {
    if(this.isEditingMode) {
      this.recipesService.updateRecipe(this.id, this.form.value);
    } else {
      this.recipesService.addRecipe(this.form.value);
    }
  };

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  onDeleteIngredient(ind: number) {
    const ingredientsArr = this.form.controls['ingredients'] as FormArray;
    ingredientsArr.removeAt(ind)
  };

  onAddIngredient() {
    const ingredientsArr = this.form.controls['ingredients'] as FormArray;
    ingredientsArr.push(
      this.fb.group({
        'name': [null, [Validators.required, Validators.minLength(3)]],
        'amount': [null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/), Validators.minLength(3)]]
      })
    );
  };
}
