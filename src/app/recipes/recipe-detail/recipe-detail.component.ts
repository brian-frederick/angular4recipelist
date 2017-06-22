import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onToShoppingList(ingredientsToAdd: Ingredient[]){
    this.shoppingListService.addNewIngredients(ingredientsToAdd);
  }

}
