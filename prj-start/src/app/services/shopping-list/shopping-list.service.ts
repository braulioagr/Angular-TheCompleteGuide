import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {

  ingridientsChanged =  new Subject<Ingredient[]>()


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  
  public get Ingredients() : Ingredient[] {
    return [...this.ingredients];
  }
  
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingridientsChanged.next([...this.ingredients]);
  }

  addIngredients( ingridients: Ingredient[] ){
    this.ingredients.push(...ingridients);
    this.ingridientsChanged.next([...this.ingredients]);
  }
  
}
