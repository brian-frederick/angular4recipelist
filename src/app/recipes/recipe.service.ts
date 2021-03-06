
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService {

    
    private recipes: Recipe[] = [
        new Recipe(
        "Chicken Soup", 
        "It's delicious", 
        "https://thumb7.shutterstock.com/display_pic_with_logo/1279450/327254051/stock-photo-chicken-soup-with-noodles-and-vegetables-in-white-bowl-327254051.jpg", 
        [
            new Ingredient('chicken', 1),
            new Ingredient('Soup stuff', 1),
            new Ingredient('carrots', 8)
        ]), 
        new Recipe(
            "Orzo", 
            "It's Greek?", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbn_7eelZ5u-VE99ZxqnU9VaHZ1ZvaNX9F53Zbe8drcRXmbDpFmYliSEVH",
            [
                new Ingredient('pasta i think?', 11),
                new Ingredient('that good good sauce', 1)
            ])
    ];


    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];        
    }

    


}