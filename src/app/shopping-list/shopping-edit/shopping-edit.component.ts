import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.interface';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;

  constructor(
    private fb: FormBuilder,
    private shoppingListService: ShoppingListService) { };

  ngOnInit() {
    this.form = this.fb.group({
      'name': [null, [Validators.required, Validators.minLength(3)]],
      'amount': [null, [Validators.required, Validators.min(1)]]
    });

    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      const{name, amount} = this.shoppingListService.getIngredients()[index];
      this.form.setValue({
        'name': name,
        'amount': amount
      });
      this.editMode = true;
      this.editedItemIndex = index;
    });
  };
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

  onSubmit() {
    const { name, amount } = this.form.value;
    if(this.editMode) {
      this.shoppingListService.editIngredient({name, amount}, this.editedItemIndex);
    } else {
      this.shoppingListService.addIngredient({name, amount});
    }
  };

  onClear() {
    this.form.reset();
    this.editMode = false;
  };
}
