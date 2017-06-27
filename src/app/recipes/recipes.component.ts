import { Component, OnInit, Output, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  @Output() selectedRecipe: Recipe;
  
  constructor(private recipeService: RecipeService ) {
   }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }

  onRecipeSelected(eventRecipe){
    console.log("recipe Selected received in Recipes Component!");
    this.selectedRecipe = eventRecipe;
  }
}