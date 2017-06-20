import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
    console.log(this.ingredientName);
    const fullIngredient = new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.valueAsNumber);
    this.ingredientAdded.emit(fullIngredient);
  }
}