import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})


export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(
        (params) => {this.getSelectedRecipe()}
      );
  }


  onToShoppingList(ingredientsToAdd: Ingredient[]){
    this.shoppingListService.addNewIngredients(ingredientsToAdd);
  }
  getSelectedRecipe(){
      this.selectedRecipe = this.recipeService.getRecipe(this.route.snapshot.params['index']);  
  }

}
