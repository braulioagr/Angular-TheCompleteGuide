import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private recipeslURL: string = 'https://ng-course-recipe-book-4aa35-default-rtdb.firebaseio.com/recipes.json';
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService
    ) { }


  storeRecipes(){
    const recipes =  this.recipeService.getRecipes();
    this.httpClient
      .put(
        this.recipeslURL,
        recipes
        )
      .subscribe((response) =>{
        console.log( response );
        
      });
  }
  
  fetchRecipes(){
    return this.httpClient.get<Recipe[]>( this.recipeslURL )
    .pipe(
      map((recipes)=>{
        return recipes.map( recipe => {
          return {
            ...recipe, 
            ingredients: recipe.ingredients ? recipe.ingredients : []
          }
        });
      }),
      tap((recipes)=>{
        this.recipeService.Recipes = recipes
      })
    )
  }

}
