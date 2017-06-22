import { Component, OnInit, ViewChild, EventEmitter, ElementRef, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

@Injectable()
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;
  

  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
  }

  onAddIngredient(){
    const fullIngredient = new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.valueAsNumber);
    this.shoppingListService.addNewIngredient(fullIngredient);

  }
}