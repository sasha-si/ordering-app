import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() recipesClicked = new EventEmitter<boolean>();
  @Output() shoppingListClicked = new EventEmitter<boolean>();

  isOpened = false;

  onRecipesClicked(name: boolean) {
    this.recipesClicked.emit(name);
  };

  onShoppingListClicked(name: boolean) {
    this.shoppingListClicked.emit(name);
  };
}
