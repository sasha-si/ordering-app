import { Component } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
    private recipes: RecipesService) {};

  onSaveData() {
    this.dataStorageService.saveRecipes();
  };

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  };
}
