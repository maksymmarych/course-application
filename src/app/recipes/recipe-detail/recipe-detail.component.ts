import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe-list/recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  id: number;

  constructor(private rsService: RecipeService,
              private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.rsService.getRecipe(this.id);
      }
    );
  }

  addToShoppingList() {
    this.rsService.addIngredientToShoppnigList(this.recipe.ingredients);
  }

}
