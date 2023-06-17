import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  @Output() newItem = new EventEmitter<Ingredient>();

  pullData(name: string, amount: number) {
    this.newItem.emit(new Ingredient(name, amount));
  };
}
