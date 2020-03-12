import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  @Input("recipeItem")
  recipeItem: Recipe;
  itemCliked(recipe: Recipe) {
    this.recipeService.selectCurrentRecipe(this.recipeItem);
  }

  ngOnInit() {}
}
