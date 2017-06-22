import { EventEmitter } from '@angular/core';
import { Recipe } from './Recipe.model';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe("Chicken Soup", "It's delicious", "https://thumb7.shutterstock.com/display_pic_with_logo/1279450/327254051/stock-photo-chicken-soup-with-noodles-and-vegetables-in-white-bowl-327254051.jpg"), 
        new Recipe("Orzo", "It's Greek?", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbn_7eelZ5u-VE99ZxqnU9VaHZ1ZvaNX9F53Zbe8drcRXmbDpFmYliSEVH")
    ];


    getRecipes() {
        return this.recipes.slice();
    }

    


}