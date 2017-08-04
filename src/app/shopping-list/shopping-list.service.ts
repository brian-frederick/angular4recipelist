
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


export class ShoppingListService {
    ingredientAdded = new Subject<Ingredient[]>()
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)
    ];

    addNewIngredient(ingredientToAdd){
        this.ingredients.push(ingredientToAdd);
        this.ingredientAdded.next(this.ingredients);
    }

    addNewIngredients(ingredientsToAdd: Ingredient[]){
        this.ingredients.push(...ingredientsToAdd);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

}