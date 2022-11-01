import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new Subject<Recipe>;

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A sueper-tasty Schnitzel - Just awsome!',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('Big Fat Burguer',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ])
  ];
  constructor( private shoppingListService: ShoppingListService) { }

  addIngredientsToShoppingList( ingredients: Ingredient[] ){
    this.shoppingListService.addIngredients(ingredients);

  }

  public getRecipeByIndex( index: number ) : Recipe {
    return [...this.recipes][index];
  }



  public get Recipes() : Recipe[] {
    return [...this.recipes];
  }
  
  

}
