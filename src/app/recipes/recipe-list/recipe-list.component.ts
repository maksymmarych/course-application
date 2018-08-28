import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Burger',
      'Our DOUBLE QUARTER POUND KING™ Sandwich features two ¼ lb savory flame-grilled beef patties, topped with all of our classic favorites: melted cheese, freshly sliced onions, zesty pickles, ketchup, & mustard all on a toasted sesame seed bun',
      'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/02750-2%20BK_Web_DblQtrPndKing_300x270px_CR_0.png'),
    new Recipe('Pizza',
      'A quick and easy pizza with no proving required. Tailor the toppings to suit your taste.',
      'https://images.pizza33.ua/products/product/5BFLF0JIeAunszD18ZoZJtMMOBE6wnKJ.jpg'),
    new Recipe('Pasta',
      'This dreamy Creamy Rosé Pasta recipe is made with lots of roasted tomatoes, spinach, garlic, basil and Parmesan.  And it’s tossed with the most delicious creamy sauce, made with half a bottle of rosé wine.  Perfect for a date night in!',
      'https://www.gimmesomeoven.com/wp-content/uploads/2018/02/Creamy-Rose%CC%81-Pasta-with-Roasted-Tomatoes-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
