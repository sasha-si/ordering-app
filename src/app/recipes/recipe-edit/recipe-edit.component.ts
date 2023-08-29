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
    private recipeService: RecipesService,
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
    const { name, imagePath, description, ingredients } = this.recipeService.getRecipes()[this.id - 1];
    if (this.isEditingMode) {
      name;
      imagePath;
      description;
      ingredients;
    } else {
      null
    }

    this.form = this.fb.group({
      'name': [name, [Validators.required, Validators.minLength(3)]],
      'imagePath': [imagePath, [Validators.required, Validators.min(10)]],
      'description': [description, [Validators.required, Validators.min(10)]],
      'ingredients': this.fb.array(
        ingredients.map((i: Ingredient) => {          
          return this.fb.group({
            'name': [i.name, [Validators.required, Validators.minLength(3)]],
            'amount': [i.amount, [Validators.required, Validators.minLength(3)]]
          })
        })
      ),
    });
  };

  onSubmit() {
    console.log(this.form);
  };

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  onAddIngredient() {
    const ingredientsArr = this.form.controls['ingredients'] as FormArray;
    ingredientsArr.push(
      this.fb.group({
        'name': [null, [Validators.required, Validators.minLength(3)]],
        'amount': [null, [Validators.required, Validators.minLength(3)]]
      })
    );
  };
}
