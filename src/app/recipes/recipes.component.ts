import { Component, OnInit, Output, Input } from '@angular/core';
import {Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Output() selectedRecipe: Recipe;
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(eventRecipe){
    console.log("recipe Selected received in Recipes Component!");
    this.selectedRecipe = eventRecipe;
  }
}