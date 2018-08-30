import { Component, OnInit, Input } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 3),
    new Ingredient('Cheese', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredients.forEach( function (value) {
      console.log(value);
    });
  }

}
