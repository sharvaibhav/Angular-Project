import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatos", 10)
  ];
  shoppingListUpdatedEvent = new EventEmitter<Ingredient[]>();
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
  addShoppingListItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.shoppingListUpdatedEvent.emit(this.ingredients.slice());
  }
  addShoppingListItems(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.shoppingListUpdatedEvent.emit(this.ingredients.slice());
  }
  deleteShoppingListIngredient() {
    this.ingredients.splice(-1, 1);
    this.shoppingListUpdatedEvent.emit(this.ingredients.slice());
  }
}
