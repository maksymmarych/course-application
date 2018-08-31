import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe-list/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Burger',
      'Our DOUBLE QUARTER POUND KING™ Sandwich features two ¼ lb savory flame-grilled beef patties, topped with all of our classic favorites: melted cheese, freshly sliced onions, zesty pickles, ketchup, & mustard all on a toasted sesame seed bun',
      'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/02750-2%20BK_Web_DblQtrPndKing_300x270px_CR_0.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 3)
      ]),
    new Recipe('Pizza',
      'A quick and easy pizza with no proving required. Tailor the toppings to suit your taste.',
      'https://images.pizza33.ua/products/product/5BFLF0JIeAunszD18ZoZJtMMOBE6wnKJ.jpg',
      [
        new Ingredient('Tomato', 3),
        new Ingredient('Salami', 1)]),
    new Recipe('Pasta',
      'This dreamy Creamy Rosé Pasta recipe is made with lots of roasted tomatoes, spinach, garlic, basil and Parmesan.  And it’s tossed with the most delicious creamy sauce, made with half a bottle of rosé wine.  Perfect for a date night in!',
      'https://www.gimmesomeoven.com/wp-content/uploads/2018/02/Creamy-Rose%CC%81-Pasta-with-Roasted-Tomatoes-1.jpg',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Bacon', 3)])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppnigList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
