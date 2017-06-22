
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientAdded = new EventEmitter<Ingredient[]>()
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)
    ];

    addNewIngredient(ingredientToAdd){
        this.ingredients.push(ingredientToAdd);
        this.ingredientAdded.emit(this.ingredients);
    }

    getIngredients() {
        return this.ingredients.slice();
    }

}