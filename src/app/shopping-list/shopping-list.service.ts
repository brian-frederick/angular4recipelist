
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

    addNewIngredients(ingredientsToAdd: Ingredient[]){
        this.ingredients.push(...ingredientsToAdd);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

}