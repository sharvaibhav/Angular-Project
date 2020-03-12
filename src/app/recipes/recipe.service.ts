import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}
  recipes: Recipe[] = [
    new Recipe(
      "Burger",
      "some test recipe description",
      "https://media.gettyimages.com/photos/closeup-of-burger-picture-id763260055?s=612x612",
      [new Ingredient("bread", 2), new Ingredient("patty", 1)]
    ),
    new Recipe(
      "Biryani ",
      "Some text for recipe number 2",
      "https://p7.hiclipart.com/preview/632/690/573/5bbe77d8601d3.jpg",
      [new Ingredient("rice", 200), new Ingredient("meat", 10)]
    )
  ];
  recipeSelectedEvent = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  selectCurrentRecipe(recipe: Recipe) {
    this.recipeSelectedEvent.emit(recipe);
  }

  addShoppingListItems(recipe: Recipe) {
    this.shoppingListService.addShoppingListItems(recipe.ingredients);
  }
}
