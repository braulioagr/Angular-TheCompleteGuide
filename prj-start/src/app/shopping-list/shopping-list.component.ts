import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  ingredients: Ingredient[];
  private igChangeSub: Subscription;
  constructor( private shoppingListService: ShoppingListService ) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.Ingredients;
    this.igChangeSub = this.shoppingListService.ingridientsChanged
      .subscribe(
        ( ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
      });
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

}
