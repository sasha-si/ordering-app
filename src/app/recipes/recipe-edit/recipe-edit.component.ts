import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  isEditingMode = false;

  constructor(private route: ActivatedRoute){};

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        params['id'] === undefined ? this.isEditingMode = false : this.isEditingMode = true;
      }
    );
  }
}
