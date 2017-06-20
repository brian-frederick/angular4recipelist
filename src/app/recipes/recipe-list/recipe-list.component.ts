import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Chicken Soup", "It's delicious", "https://thumb7.shutterstock.com/display_pic_with_logo/1279450/327254051/stock-photo-chicken-soup-with-noodles-and-vegetables-in-white-bowl-327254051.jpg"), 
    new Recipe("Orzo", "It's Greek?", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbn_7eelZ5u-VE99ZxqnU9VaHZ1ZvaNX9F53Zbe8drcRXmbDpFmYliSEVH")
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  recipeSelectedForDetails(eventRecipe){
    console.log("recipe Selected Event received in recipe-list");
    this.recipeSelected.emit(eventRecipe);
  }

}
