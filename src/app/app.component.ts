import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ordering-app';

  showRecipes = true;
  showShoppingList = false;

  dispayRecipes(trigger: boolean) {
    this.showRecipes = trigger;
    this.showShoppingList = !trigger;
  };
  
  dispayShoppingList(trigger: boolean) {
    this.showShoppingList = trigger;
    this.showRecipes = !trigger;
  };
}
